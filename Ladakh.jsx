import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Ladakh() {
  return(
    <div>
        <a href='https://ladakh.gov.in/tourism/'><h1 className='heading'>Ladakh</h1></a>
        <h2 className='capital'>Capital: Leh</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://www.lehladakhtours.com/wp-content/uploads/2018/06/alchi_monastery.jpg"
            title="Alchi Monastery"
            location="Alchi"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-alchi-india?search=200-74459;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Alchi+Monastery+-+Choskhor/@34.2236875,77.1726072,17z/data=!3m1!4b1!4m6!3m5!1s0x38fd0a8c688e2fef:0xfe5350522339645b!8m2!3d34.2236875!4d77.1751875!16s%2Fm%2F09gjx71?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkauTwWBGh9tr-s9xMpIkHHvqsRgQ1-YpoA&s"
            title="Magnetic Hill"
            location="Leh"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-leh-india?search=200-74423;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Magnetic+Hill/@34.1762931,77.3499835,16z/data=!3m1!4b1!4m6!3m5!1s0x38fd9838a0409b27:0x93a1a42e751c8c2e!8m2!3d34.1763828!4d77.3550541!16s%2Fm%2F02ql1ns?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKIRR2Ony5W25otd2M5XlEZIPsGCqoyNr5g&s"
            title="Shanti Stupa"
            location="Leh"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-leh-india?search=200-74423;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Shanti+Stupa/@34.1736196,77.5724185,17z/data=!3m1!4b1!4m6!3m5!1s0x38fdeb25362964e7:0xc90661126729dda8!8m2!3d34.1736196!4d77.5749988!16s%2Fm%2F080k_dj?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIA78H-n_IIyQ6hQOTvp0uLF0mtDmsh9u6LQ&s"
            title="Khardung La Pass"
            location="Leh"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-leh-india?search=200-74423;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Khardung+La/@34.2787342,77.6019894,17z/data=!3m1!4b1!4m6!3m5!1s0x38fdc0fef3b9c14b:0x37ec5dd55776d9f1!8m2!3d34.2787271!4d77.6046756!16zL20vMDdmZ2w0?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr67p_cRP_fDmhUV733e15bQSvGhmkvskEg&s"
            title="Shondol"
            location="Ladakh is known for its vibrant traditional dances like Shondol, performed during festivals."
            locateUrl='https://www.youtube.com/watch?v=lIoT5IapELI'
            />
            <Hover1
            imageSrc="https://c8.alamy.com/comp/B9J67F/ladakhi-couple-wearing-traditional-costumes-leh-ladakh-north-india-B9J67F.jpg"
            title="Kashmiri Phera and Goncha"
            location="Traditional attire includes the Goncha for men and the Kashmiri Pheran for women, often adorned with colorful accessories."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBMlNtD3S6Mybhi-5fc92KnQqZFmnTiMCeQ&s"
            title="Losar"
            location="Losar, the Ladakhi New Year, is celebrated with feasts, dances, and cultural events to mark the arrival of spring."
            />
            <Hover1
            imageSrc="https://static.vecteezy.com/system/resources/previews/024/253/356/non_2x/bhutan-dranyen-folk-music-instrument-png.png"
            title="Dranyen"
            location="Ladakhi music features instruments like the Daman and Dranyen, integral to cultural celebrations."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IvbywiEREgWt9KCQ5vzSQeqhhNQcqLDZZg&s"
            title="Thukpa"
            location="A hearty noodle soup made with meat or vegetables, popular among locals and visitors."
            />
            <Hover1
            imageSrc="https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Paneer-Momos.jpg"
            title="Momos"
            location="Delicious steamed or fried dumplings filled with vegetables or meat, often served with spicy chutney."
            />
            <Hover1
            imageSrc="https://www.loyalpetzone.com/wp-content/uploads/2019/01/Chhurpi-cheese.jpg"
            title="Churpee"
            location="A traditional cheese made from cow or yak milk, consumed as a snack or used in dishes."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSQPcmLMkln2ckcioE426g4sQptmuAJL_pQ&s"
            title="Skyu"
            location="A traditional Ladakhi dish made with dumplings and vegetables, cooked in a flavorful broth."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Tf6QYhqiaLEHJOwiYFIiZexvg1U0FghR_A&s"
            title="Hemis National Park"
            locateUrl ="https://www.google.com/maps/place/Hemis+National+Park/@33.7187211,77.3856421,17z/data=!3m1!4b1!4m6!3m5!1s0x3902707b177afb8b:0xf74ea9833e5618e2!8m2!3d33.7187211!4d77.3882224!16zL20vMDhfdndi?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://www.kashmirtourpackage.org/wp-content/uploads/2014/03/Pangong-Lake-Ladakh.jpg"
            title="Pangong Lake"
            locateUrl="https://www.google.com/maps/place/Pangong+Tso/@33.821959,78.5584379,11z/data=!3m1!4b1!4m6!3m5!1s0x39002d69b6082a97:0xb7ba17e3c8c016a9!8m2!3d33.7595131!4d78.6674404!16zL20vMDY0eG5m?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/51/Tso_Moriri%2C_Ladakh_%2834855616204%29.jpg"
            title="Tso Moriri Lake"
            locateUrl= "https://www.google.com/maps/place/Tso+Moriri/@32.9031495,78.2341443,12z/data=!3m1!4b1!4m6!3m5!1s0x39011569dbf9ff71:0xd7f871fe3b84562d!8m2!3d32.9112291!4d78.3159411!16zL20vMGR6bl8z?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b9/e6/1c/nubra-valley.jpg?w=1200&h=-1&s=1"
            title="Nubra Valley"
            locateUrl="https://www.google.com/maps/place/Nubra+Valley/@34.6863137,77.5569668,15z/data=!3m1!4b1!4m6!3m5!1s0x38fc367354176591:0x8bc4556bab23cae9!8m2!3d34.6863146!4d77.567288!16zL20vMDdjY3h6?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/53/db/4b/getlstd-property-photo.jpg?w=1200&h=-1&s=1"
            title="Leh Main Bazaar"
            locateUrl="https://www.google.com/maps/search/Leh+Main+Bazaar/@34.156596,77.5757145,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/32/f7/12/tibetan-market.jpg?w=1200&h=-1&s=1"
            title="Tibetan Market"
            locateUrl="https://www.google.com/maps/search/Tibetan+Market/@34.1565952,77.5756716,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pObexOZV1C2kvcwRWejBOYuJbgPOlHaiqA&s"
            title="Moti Market"
            locateUrl="https://www.google.com/maps/place/Moti+Bazar+Rd,+Haridwar,+Uttarakhand+249401/@29.9532646,78.1646005,17z/data=!3m1!4b1!4m6!3m5!1s0x39094704b1be91e3:0x2d65cc67285e7c13!8m2!3d29.9532646!4d78.1671808!16s%2Fg%2F11h0kpflk?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudz2bWK5YIuzlVg9ybTrMfR3yE_c-Eq200Q&s"
            title="Dalai Lama Charitable Trust Handicraft Emporium"
            locateUrl="https://www.google.com/maps/place/Hh+The+Dalai+Lama%60s+Charitables+Trust+Handicraft+Exports/@28.5683256,77.2369138,16z/data=!3m1!4b1!4m6!3m5!1s0x390ce252beeeaf37:0xafe3231d821c99b0!8m2!3d28.5683257!4d77.2420744!16s%2Fg%2F1tsyhkv1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/36/Leh_Palace_2011.jpg"
            title="Leh Palace"
            location="A 17th-century palace resembling the Potala Palace in Lhasa, it offers panoramic views of Leh and holds historical artifacts."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkfF3oo26mrT9klM8xnuxwdFAeKeoqs2-8Q&s"
            title="Thiksey Monastery"
            location="A beautiful Tibetan monastery known for its architecture and large Maitreya Buddha statue."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGnC_3Ic-1KpWiN-jtC4jZFHFhBZdZoStgw&s"
            title="Hemis Monastery"
            location="The largest and wealthiest monastery in Ladakh, famous for its annual Hemis festival celebrating Guru Padmasambhava."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/d/d3/Alchi.jpg"
            title="Alchi Monastery"
            location="A 10th-century monastery, renowned for its exquisite ancient murals and Indo-Tibetan art."
            />
            </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Visit from May to September for pleasant weather and clear roads."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Acclimatization"
            location="Spend a day or two acclimatizing to the high altitude before engaging in strenuous activities."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Dress in Layers"
            location="Wear layers to prepare for varying temperatures, as days can be warm and nights chilly."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Stay Hydrated"
            location="Drink plenty of water to combat altitude sickness and stay hydrated."
            />
        </div>
    </div>
)
}
export default Ladakh;