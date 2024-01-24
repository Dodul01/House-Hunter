const FilterBox = () => {
    return (
        <div className='mb-10 p-4 relative'>
            <img className='h-[300px] w-full object-cover bg-center rounded-xl' src="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_lrg-95837ae74f7256685373.avif" alt="filter_box_bg" />
            <div className='absolute top-0 left-0 p-4 w-full'>
                <h1 className='text-center text-2xl font-bold my-8'>Find Your Dream House</h1>
                <div className='bg-white w-[70%] mx-auto rounded-3xl p-4'>
                    <h1 className='text-xl font-semibold my-2 mb-6'>Filter House</h1>
                    <div className="flex items-center gap-4">
                        <div className='border rounded-full'>
                            <input className="p-2 outline-none rounded-full border-none" type="text" placeholder='Search Home' required />
                            <button className='bg-[#E4002B] text-white text-lg font-semibold px-7 p-2 rounded-full' type='submit'>Search</button>
                        </div>
                        <div className="flex items-center gap-2">
                            <h3>Filter By</h3>
                            <div className="border p-2 rounded-lg">
                                <select>
                                    <option value="null">Price</option>
                                    <option value="500-600">$500 - $600</option>
                                    <option value="1000-1500">$1000 - $1500</option>
                                    <option value="1500-2000">$1500 - $2000</option>
                                </select>
                            </div>
                            <div className="border p-2 rounded-lg">
                                <select>
                                    <option value="null">City</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="gazipur">Gazipur</option>
                                    <option value="mymensingh">Mymensingh</option>
                                    <option value="rangpur">Rangpur</option>
                                    <option value="cumilla">Cumilla</option>
                                    <option value="barisal">Barisal</option>
                                    <option value="narayanganj">Narayanganj</option>
                                </select>
                            </div>
                            <div className="border p-2 rounded-lg">
                                <select>
                                    <option value="null">Bed Room</option>
                                    <option value="twoBedRooms">Two Bed Rooms</option>
                                    <option value="threeBedRooms">Three Bed Rooms</option>
                                    <option value="fourBedRooms">Four Bed Rooms</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBox