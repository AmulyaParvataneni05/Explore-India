import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Rajasthan()
{
    return(
        <div>
            <a href='https://www.tourism.rajasthan.gov.in/'><h1 className='heading'>Rajasthan</h1></a>
            <h2 className='capital'>Capital: Jaipur</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kjJV-FuuCMWuE77uedxVRAjYAM2FSfkt7A&s"
                title="Amber Fort"
                location="Jaipur"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-jaipur-india?search=200-64989;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Amber+Palace/@26.9854865,75.7751277,13z/data=!4m10!1m2!2m1!1samber+fort!3m6!1s0x396db05acbd20dfb:0x6221df6747147e2b!8m2!3d26.9854865!4d75.8513454!15sCgphbWJlciBmb3J0WgwiCmFtYmVyIGZvcnSSAQZjYXN0bGWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnNkbUpZTFZkM0VBReABAA!16zL20vMDgxanYz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f5/31/80/pushkar-lake.jpg?w=1200&h=-1&s=1"
                title="Pushkar Lake"
                location="Pushkar"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-pushkar-india?search=200-82544;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Pushkar+Lake/@26.4876783,74.5527386,18z/data=!3m1!4b1!4m6!3m5!1s0x396bdd22761ba727:0xaf95ea49c8219b77!8m2!3d26.4871515!4d74.5540177!16zL20vMDcxd3Az?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvP1_EurPUEaFRz1kYQHTW9hTrFsAKOjzpnw&s"
                title="Ajmer Sharif Dargah"
                location="Ajmer"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-ajmer-india?search=200-344763;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Khwaja+Gharib+Nawaz+Dargah+Sharif/@26.4508084,74.6210648,15z/data=!4m10!1m2!2m1!1sAjmer+Sharif+Dargah!3m6!1s0x396be710a6295d19:0x17da9f02930d903b!8m2!3d26.4561669!4d74.6282585!15sChNBam1lciBTaGFyaWYgRGFyZ2FoWhUiE2FqbWVyIHNoYXJpZiBkYXJnYWiSAQZzaHJpbmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkhNM1ptWDJOQkVBReABAA!16s%2Fm%2F0j3flpf?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJzYfTD2nTYbrBPPsPOV2J7E6j5kwriXftQ&s"
                title="Dilwara Temples"
                location="Mount Abu"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-mount-abu-india?search=200-345093;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Dilwara+temple/@24.609382,72.7203994,17z/data=!3m1!4b1!4m6!3m5!1s0x395d2a8fee50b0fd:0x457abeef5061268!8m2!3d24.609382!4d72.7229797!16zL20vMDNjMzV0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://cdn.shopify.com/s/files/1/0562/8792/0217/t/7/assets/27464776076_6152cf2606_z.jpg?v=1655289702"
                title="Ghoomar"
                location="A folk dance performed by women in colorful attire during festive occasions."
                locateUrl='https://www.youtube.com/watch?v=OXjyeKwXp3o&t=13s'
                />
                <Hover1
                imageSrc="https://thumbs.dreamstime.com/z/easy-to-edit-vector-illustration-rajasthani-wedding-couple-traditional-costume-rajasthan-india-rajasthani-wedding-couple-108357401.jpg"
                title="Ghagras and Dhoti"
                location="Men wear dhotis and kurtas, and women wear ghagras and cholis with jewelry."
                />
                <Hover1
                imageSrc="https://www.tripsavvy.com/thmb/--xKuF4KkxW9r6hi4sj-Ap7zkuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-109686750-59d5e29faad52b0010d4ca6f.jpg"
                title="Pushkar Camel Fair"
                location="An annual livestock fair with cultural performances, competitions, and trading of camels."
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/ec/Rajasthani_music.jpg"
                title="Music of Rajasthan"
                location="Instruments like the sarangi and dhol, with music like 'Kalbeliya' and 'Bhavai,' reflect Rajasthan's heritage."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://vaya.in/recipes/wp-content/uploads/2018/04/dal-bati-churma.jpg"
                title="Dal Baati Churma"
                location="A signature Rajasthani dish combining baked wheat balls, spicy lentils, and sweet crushed wheat."
                />
                <Hover1
                imageSrc="https://static.toiimg.com/thumb/53537462.cms?imgsize=154132&width=800&height=800"
                title="Laal Maas"
                location="A fiery mutton curry made with red chilies and traditional spices, reflecting Rajasthan's bold flavors."
                />
                <Hover1
                imageSrc="https://vegecravings.com/wp-content/uploads/2017/06/Gatte-Ki-Sabzi-Recipe-Step-By-Step-Instructions.jpg"
                title="Gatte ki Sabzi"
                location="Gram flour dumplings cooked in a spicy yogurt-based gravy, a staple in Rajasthani households."
                />
                <Hover1
                imageSrc="https://www.whiskaffair.com/wp-content/uploads/2020/09/Ker-Sangri-2-3.jpg"
                title="Ker Sangri"
                location="A unique desert vegetable dish made from dried berries and beans, cooked with local spices."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRlJE-uF_nISjL9MHluxo9fX2VFpANwzFFQ&s"
                title="Ranthambore National Park"
                locateUrl ="https://www.google.com/maps/search/Ranthambore+National+Park/@26.0125432,76.4454555,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHq3Kr5E4i-GjGuc8lM9VxNzgS0xvw2c4MQ&s"
                title="Keoladeo National Park"
                locateUrl="https://www.google.com/maps/place/Keoladeo+National+Park/@27.1596085,77.5192324,17z/data=!3m1!4b1!4m6!3m5!1s0x3973bcdb8c3b486f:0xe1433045d9b16b7b!8m2!3d27.1596085!4d77.5218127!16s%2Fg%2F11bc5vd44t?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://blog-content.ixigo.com/wp-content/uploads/2019/07/Sariska-Tiger-Reserve-.jpg"
                title="Sariska Tiger Reserve"
                locateUrl= "https://www.google.com/maps/place/Sariska+Tiger+Reserve/@27.3104429,76.4363364,17z/data=!3m1!4b1!4m6!3m5!1s0x396d7fad54382e5d:0x4860ac432e594e26!8m2!3d27.3104429!4d76.4389167!16zL20vMDcwenkz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVeb-0CrP8oiQqmbubL3yXctoZjbX9OZD-g&s"
                title="Desert National Park"
                locateUrl="https://www.google.com/maps/search/Desert+National+Park/@26.8194627,70.5156133,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHw3jKpPMbGByNNsn8Xu7dPzHgeXRyIdDnQ&s"
                title="Johari Bazaar"
                locateUrl="https://www.google.com/maps/place/Johri+Bazar,+Gangori+Bazar,+Pink+City,+Jaipur,+Rajasthan+302007/@26.9200347,75.8245467,17z/data=!3m1!4b1!4m6!3m5!1s0x396db14fd3b5b6b9:0xcb79c4a8a3491334!8m2!3d26.921113!4d75.8278618!16s%2Fg%2F1pzsltvk2?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://static.wanderon.in/wp-content/uploads/2024/05/bapu-bazar.jpg"
                title="Bapu Bazaar"
                locateUrl="https://www.google.com/search?q=Bapu+Bazaar&sca_esv=de788ad3f268e4d9&sca_upv=1&hl=en&biw=1707&bih=940&udm=2&sxsrf=ADLYWIKbRCXXcXClWr9pVlzE3CORSF4ifA%3A1725282404508&ei=ZLjVZubgHvKX4-EP44GDmA4&ved=0ahUKEwjmou7mqaSIAxXyyzgGHePAAOMQ4dUDCBE&uact=5&oq=Bapu+Bazaar&gs_lp=Egxnd3Mtd2l6LXNlcnAiC0JhcHUgQmF6YWFyMgcQABiABBgKMgoQABiABBixAxgKMgUQABiABDIHEAAYgAQYCjIFEAAYgAQyBxAAGIAEGAoyBxAAGIAEGAoyBRAAGIAEMgcQABiABBgKMgcQABiABBgKSJoDUOcBWOcBcAF4AJABAJgBgQGgAYEBqgEDMC4xuAEDyAEA-AEB-AECmAICoAKuAagCCsICBxAjGCcY6gKYAx2SBwMxLjGgB7oH&sclient=gws-wiz-serp"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWyKDJYKZ1CgRhiGSDfolbW3YHpL1pvVStw&s"
                title="Clock Tower Market"
                locateUrl="https://www.google.com/maps/place/Clock+Market/@26.2950983,73.0207465,17z/data=!3m1!4b1!4m6!3m5!1s0x39418db131af8c35:0x5398c759a853167a!8m2!3d26.2950983!4d73.0233268!16s%2Fg%2F11b7crv5_m?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://www.connectingtraveller.com/images/localtip/1632945064images.jpeg"
                title="Sojati Gate Market"
                locateUrl="https://www.google.com/maps/place/SOJATI+GATE/@26.2906301,73.0136074,16z/data=!4m10!1m2!2m1!1sSojati+Gate+Market!3m6!1s0x39418d7eae99f24f:0xeb4f2d3eda79f4e9!8m2!3d26.2884555!4d73.0240356!15sChJTb2phdGkgR2F0ZSBNYXJrZXRaFCISc29qYXRpIGdhdGUgbWFya2V0kgETaGlzdG9yaWNhbF9sYW5kbWFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSd01HRm1kR0ZCRUFF4AEA!16s%2Fg%2F11ty74ff_t?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://i0.wp.com/thewandertherapy.com/wp-content/uploads/2023/09/4-3.jpg"
                title="Chittorgarh Fort"
                location="One of the largest forts in India, symbolizing Rajput valor and the historic tales of sacrifice."
                />
                <Hover1
                imageSrc="https://www.travelescape.in/wp-content/uploads/2017/07/Jodhpur-1-www_mouthshut_com.jpg"
                title="Mehrangarh Fort"
                location="A massive fort overlooking Jodhpur, famous for its intricate carvings and expansive courtyards."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY8Zt03udxh7BPEKBL9gablvFZjYW7ql8Bw&s"
                title="Kumbhalgarh Fort"
                location="Known for its massive walls, this fort was the birthplace of Maharana Pratap."
                />
                <Hover1
                imageSrc="https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/669a47b5-f41b-4300-b910-17cb3a5bb594/The+Common+Wanderer-2155-2.jpg"
                title="City Palace"
                location="A grand palace complex on the banks of Lake Pichola, showcasing the rich history and culture of the Mewar dynasty."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Dress Appropriately"
                location="Respect local customs by wearing modest clothing, particularly when visiting temples and religious sites."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Plan for Desert Weather"
                location="Nights in the desert can be surprisingly cold, so bring warm clothing if you plan to visit places like Jaisalmer."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Travel Insurance"
                location="Ensure you have comprehensive travel insurance, particularly if you plan to participate in adventure activities like camel safaris."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Local Guides"
                location="Hire local guides to get the most out of historical sites like forts and palaces; they can provide valuable insights."
                />
            </div>
        </div>
    )
}
export default Rajasthan;
