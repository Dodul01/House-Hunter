const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
require('dotenv').config()

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');



const uri = process.env.URI;

// Middle ware 
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.send({ status: 401, message: 'Unauthorized' })
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
    if (err) {
      return res.send({ status: 401, message: 'Unauthorized' })
    }

    req.decode = decode;
    const userRole = decode.userRole;

    req.role = userRole;
  })
  next()
}



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const userCollections = client.db('HouseHunter').collection('userCollections');
    const roomsCollections = client.db('HouseHunter').collection('roomsCollections');

    app.post('/signUp', async (req, res) => {
      const userInfo = req.body;

      const existingUser = await userCollections.findOne({ email: userInfo.email });

      if (existingUser) {
        return res.send({ status: 400, message: 'Email is already registered' })
      }

      const insertUser = await userCollections.insertOne(userInfo)
      const token = jwt.sign({ email: userInfo.email, userRole: userInfo.userRole }, process.env.ACCESS_TOKEN, { expiresIn: '1d' })

      res.send({
        status: 200, message: 'Sign Up Sucessfully!', token, userData: {
          name: userInfo.fullName,
          role: userInfo.userRole,
          email: userInfo.email
        }
      })
    })

    app.post('/signIn', verifyToken, async (req, res) => {
      const userInfo = req.body;

      const existingUser = await userCollections.findOne({ email: userInfo.email });

      if (!existingUser) {
        return res.status(404).json({ status: 404, message: 'User does not exist.' });
      }

      const matchPassword = existingUser.password === userInfo.password;

      if (matchPassword) {
        return res.json({
          status: 200,
          message: 'Sign In Successfully.',
          userData: {
            name: existingUser.fullName,
            role: existingUser.userRole,
            email: existingUser.email
          },
        });
      } else {
        return res.status(401).json({ status: 401, message: 'Wrong Password!' });
      }
    });

    app.post('/rooms', verifyToken, async (req, res) => {
      const room = req.body;
      const result = await roomsCollections.insertOne(room);

      res.send({ status: 200, message: 'data recive sucessfully', result })
    });


    app.get('/rooms', verifyToken, async (req, res) => {
      let query = {};

      if (req.query?.email) {
        query = { houseOwner: req.query.email };
      }

      const result = await roomsCollections.find(query).toArray();

      res.send(result);
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Welcome to the Home Hunter server.');
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})