import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Goa() {
  return(
    <div>
        <a href='https://goa-tourism.com/'><h1 className='heading'>Goa</h1></a>
        <h2 className='capital'>Capital: Panaji</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WyMZG5nFdxHazAbUXOxWzJRuL89qrxs54A&s"
            title="Anjuna Beach"
            location="Anjuna"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-anjuna-india?search=200-74378;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Anjuna+Beach/@15.5743238,73.7349422,16z/data=!3m1!4b1!4m6!3m5!1s0x3bbfe98f11ab0199:0xd777cc02c2ccffa1!8m2!3d15.5733497!4d73.7409781!16s%2Fg%2F1tkp3f7l?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://cdn.thegoavilla.com/static/img/articles/chapora-fort.jpg"
            title="Chapora Fort"
            location="Chapora"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-near-chapora-beach?search=500-3236858;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Chapora+Fort/@15.6046375,73.7343828,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfe9c66255a1e7:0x370be2005b85a107!8m2!3d15.6046375!4d73.7369631!16s%2Fm%2F02r0rw_?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19rv286dqp3MbeYO4wWFQL3BlCNG5cgaNIA&s"
            title="Palolem Beach"
            location="Canacona"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-canacona-india?search=200-74400;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Palolem+Beach/@15.0092941,74.0188169,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbe4551d05b02bb:0x1e1bc67d4b0fbbf5!8m2!3d15.0099648!4d74.0232186!16zL20vMDgxZ3B3?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBa_lHefz_nh7I_rkjQVs6wjT4GXKTyXNpNA&s"
            title="Candolim Beach"
            location="Candolim"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-candolim-india?search=200-74398;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Candolim,+Goa/@15.5102209,73.749612,14z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc1a3ca96d9fb:0xd4400f3dbaa7b588!8m2!3d15.5128253!4d73.7688716!16zL20vMDVfcnp5?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuURIp3oUaFDWykgw17zOOhGKERYn1kCaJog&s"
            title="Fugdi"
            location="A traditional Goan folk dance performed by women during festivals and religious ceremonies."
            locateUrl='https://www.youtube.com/watch?v=hI_vjZOv5tE'
            />
            <Hover1
            imageSrc="https://pm1.aminoapps.com/6422/3479eba0e348b09d89bb930302328af036cec097_hq.jpg"
            title="Sarees and Koli"
            location="Women wear Sarees with bright colors and men don Koli shirts and half pants, reflecting Goan coastal culture."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfd1rvV9HL53q4smI81qHc952OtazhZvofow&s"
            title="Carnival"
            location="Goa's lively festival marked by parades, music, dance, and street performances."
            />
            <Hover1
            imageSrc="https://www.golokaso.com/blogs/wp-content/uploads/2018/02/image1-1.jpg"
            title="Konkani Music"
            location="A blend of Indian and Portuguese styles, often played at social gatherings."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/16/8d/f2/72/the-welcome-fish-curry.jpg"
            title="Fish Curry Rice"
            location="A staple dish made with fresh fish and a tangy coconut-based curry."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMURoKuSTxKAK0Oag5SmahKTghWgFkJEtZw&s"
            title="Prawn Balchão"
            location="A spicy, tangy prawn pickle often eaten with rice."
            />
            <Hover1
            imageSrc="https://ychef.files.bbci.co.uk/1280x720/p0gjfcls.jpg"
            title="Bebinca"
            location="A traditional Goan layered dessert made with coconut milk and eggs."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8UNX5KXgBfxb2Dnnn6msy8Jp7xy5lgOnkQ&s"
            title="Sorpotel"
            location="A pork dish with a spicy, vinegar-based sauce, popular during festivals."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://static.toiimg.com/thumb/52339266/Bhagvan-mahavir-sanctuary.jpg?width=1200&height=900"
            title="Bhagwan Mahavir Wildlife Sanctuary"
            locateUrl ="https://www.google.com/maps/place/Mollem+National+Park+%26+Bhagwan+Mahavir+Wildlife+Sanctuary/@15.3339015,74.2857733,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbf069555555555:0x1add3d12c8903bb1!8m2!3d15.3339015!4d74.2883536!16s%2Fg%2F11ggghrkk9?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXG19FBZz_5VhyWTaTPMuIxTn6wxtNnYijg&s"
            title="Salim Ali Bird Sanctuary"
            locateUrl="https://www.google.com/maps/place/Dr.+Salim+Ali+Bird+Sanctuary/@15.5130468,73.8678351,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfbf753f264d61:0xd327e1caf3767979!8m2!3d15.5130468!4d73.8704154!16s%2Fm%2F02q7tjc?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22ordz-YfwUubL2EB0l8DnV0MHGL6bQHWYw&s"
            title="Dudhsagar Waterfalls"
            locateUrl= "https://www.google.com/maps/search/Dudhsagar+Waterfalls/@15.3253139,74.2590268,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRNYTWUjQ7xTOfgzKhVx92jqI7fWZm95_XQ&s"
            title="Bondla Wildlife Sanctuary"
            locateUrl="https://google.com/maps/place/Bondla+Wildlife+Sanctuary/@15.4401104,74.1037973,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfa4566f7c32d5:0xc4ee76bccbbe058e!8m2!3d15.4401104!4d74.1063776!16zL20vMDhfbmhy?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukC8lg7MX0cOJbdTEPaGyG9HcqRrM3ZzeZw&s"
            title="Anjuna Flea Market"
            locateUrl="https://www.google.com/maps/place/Anjuna+Flea+Market/@15.572076,73.7398102,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfe912d4858f15:0xbbe5c0aaad4f57c9!8m2!3d15.572076!4d73.7423905!16s%2Fg%2F11rpzhq14k?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlksb_NHlRaR0UGY3WUzbVcLJHHtcxMFQjyA&s"
            title="Mapusa Market"
            locateUrl="https://www.google.com/maps/place/Mapusa+Municipal+Market/@15.5885834,73.8111619,19z/data=!4m10!1m2!2m1!1sMapusa+Market!3m6!1s0x3bbfeae6a993c713:0x498aeb574a55d27d!8m2!3d15.5883763!4d73.8127861!15sCg1NYXB1c2EgTWFya2V0Wg8iDW1hcHVzYSBtYXJrZXSSAQZtYXJrZXTgAQA!16s%2Fm%2F04jb_bd?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIbmCe3nxy4wSW9OVbXqjJSDfkbOBLpv-YA&s"
            title="Panjim Market"
            locateUrl="https://www.google.com/maps/place/Panjim+Market,+Panaji,+Goa+403001/@15.4996719,73.8199038,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc08b93dc557b:0x2f3e7bd12902e648!8m2!3d15.4997548!4d73.8224241!16s%2Fg%2F11f7b3qk9n?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOm7KNCyz3pxvlUIfbq1efcFKVMlfPbRp1A&s"
            title="Calangute Market"
            locateUrl="https://www.google.com/maps/place/Calangute+Market,+Calangute,+Goa+403519/@15.5451575,73.7618346,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc1e2095589eb:0xb4462f15db780ca!8m2!3d15.5452723!4d73.7641497!16s%2Fg%2F11g1gs_grr?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://www.nativeplanet.com/img/2016/09/jesus1-21-1474450633.jpg"
            title="Basilica of Bom Jesus"
            location="This 16th-century UNESCO site houses the remains of St. Francis Xavier, a revered Christian missionary."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSIn1TdOAmHa52cFJ20VCYvOdHSWos6k0uOA&s"
            title="Fort Aguada"
            location="Built in 1612, this fort protected Goa from invasions and provided water to ships."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzVnprzs6SRD_hpFQb6RsISbej08QITDXvg&s"
            title="Old Goa"
            location="The former capital of Portuguese India, known for its grand churches and convents."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeZqVJXmKhHdQxElEIWLlzw-aeeH8S_UTgQ&s"
            title="Se Cathedral"
            location="One of Asia’s largest churches, built to commemorate Portuguese victories."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Visit during the winter months for pleasant weather and vibrant festivities."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Book in Advance"
            location="Book accommodations and transportation in advance, especially during peak tourist season, to secure the best deals."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Getting Around"
            location="Rent a scooter or bike to explore Goa's beaches and hidden spots at your own pace."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Stay Hydrated and Protected"
            location="Always wear sunscreen, stay hydrated, and protect yourself from the tropical sun while outdoors."
            />
        </div>
    </div>
)
}
export default Goa;