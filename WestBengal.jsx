import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function WestBengal()
{
    return(
        <div>
            <a href='https://wbtourism.gov.in/'><h1 className='heading'>West Bengal</h1></a>
            <h2 className='capital'>Capital: Kolkata</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hWa91QYP1ozUZryLH_a-ODag_2loEDQqQ&s"
                title="Darjeeling"
                location="Darjeeling"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-darjeeling-india?search=200-80950;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Darjeeling,+West+Bengal/@27.0331889,88.2233897,13z/data=!3m1!4b1!4m6!3m5!1s0x39e42e654cf501bb:0x4175555979d4702a!8m2!3d27.0416208!4d88.2664124!16zL20vMDE5amxx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://res.cloudinary.com/simplotel/image/upload/x_0,y_113,w_4710,h_2650,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/pride-hotels-group/nakkeeran-raveendran-BZU_25MWpHM-unsplash_mfi5pc"
                title="Digha"
                location="Digha"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-digha-india?search=200-421294;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Digha,+West+Bengal/@21.6234904,87.5005342,15z/data=!3m1!4b1!4m6!3m5!1s0x3a1ccd46c454a84d:0xd166b9687aa01c59!8m2!3d21.6222179!4d87.5065627!16zL20vMGNieHI1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Shyam_Rai_Temple%2C_Bankura.JPG/220px-Shyam_Rai_Temple%2C_Bankura.JPG"
                title="Bankura"
                location="Bankura"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-bankura-india?search=200-424466;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Bankura,+West+Bengal/@23.2291597,87.0424034,14z/data=!3m1!4b1!4m6!3m5!1s0x39f7a58c5fc2b411:0xfdbd0b45c0b4aa70!8m2!3d23.2312686!4d87.0783875!16zL20vMDk5MzBq?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://i0.wp.com/traveldreams.live/wp-content/uploads/2020/11/nandlal-3-1.jpg?resize=1300%2C867&ssl=1"
                title="Bishnupur"
                location="Bishnupur"
                bookUrl="https://www.trivago.in/en-IN/lm/hotel-bishnupur-bankura?search=100-5076744;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Bishnupur,+West+Bengal+722122/@23.0694179,87.2919089,14z/data=!3m1!4b1!4m6!3m5!1s0x39f7916386ebfcf5:0xdac2e027aca2f2e6!8m2!3d23.067179!4d87.3214681!16zL20vMGJsOTQ0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://www.solitarytraveller.com/wp-content/uploads/2020/06/chhau_dance_banner-min.jpg"
                title="Chhau"
                location="A traditional dance with masks and vigorous movements depicting mythological stories."
                locateUrl='https://www.youtube.com/watch?v=FbYoFGfhxDE'
                />
                <Hover1
                imageSrc="https://miro.medium.com/v2/resize:fit:750/0*lSaN5aWWRjuCHWBM.jpg"
                title="Sarees and Dhoti"
                location="Women typically wear sarees with intricate designs, and men wear dhotis or kurta-pajamas, often with a shawl."
                />
                <Hover1
                imageSrc="https://i.pinimg.com/736x/5c/59/4a/5c594afa577c8433640dc837e26162c4.jpg"
                title="Durga Puja"
                location="A major festival celebrated with elaborate decorations, idol processions, and cultural performances."
                />
                <Hover1
                imageSrc="https://dics.co/uploads/2023/05/1683868064Rabindranath-tagore-Exclusive-Interview.webp"
                title="Rabindra Sangeet"
                location="A genre by Rabindranath Tagore, known for its lyrical and melodious tunes."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58YiX_kJj_XqNT29dCuX4ZO3D7DR9GT5yldBCHMTzc_FuyU-DdvY-Rpi2VspuBfvdcLU&usqp=CAU"
                title="Macher Jhol"
                location="A traditional Bengali fish curry cooked with spices and vegetables."
                />
                <Hover1
                imageSrc="https://images.news18.com/ibnlive/uploads/2019/10/ras.jpg?impolicy=website&width=640&height=480"
                title="Rosogolla"
                location="A popular Bengali sweet made from soft cheese balls soaked in sugar syrup."
                />
                <Hover1
                imageSrc="https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_1916557661.jpg"
                title="Chingri Malai Curry"
                location="A creamy prawn curry made with coconut milk and spices."
                />
                <Hover1
                imageSrc="https://i0.wp.com/pikturenama.com/wp-content/uploads/2020/10/Low-res-Sosrshe-Ilish-8.jpg?fit=1200%2C800&ssl=1"
                title="Shorshe Ilish"
                location="Hilsa fish cooked in a mustard seed paste, a staple of Bengali cuisine."
                /> 
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU-9P8XZQTxDLhdkrfjIOBYuXyuOaxAHNFA&s"
                title="Sundarbans National Park"
                locateUrl ="https://www.google.com/maps/place/Sundarban+National+Park+(West+Bengal)/@21.8842354,88.8827962,17z/data=!3m1!4b1!4m6!3m5!1s0x3a018264f05cd269:0xe99cba5218a4be78!8m2!3d21.8842354!4d88.8853765!16zL20vMDRqOWo4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW0E2nRCtAD5k-JGhujH-ASV_N1-GbVl21Q&s"
                title="Buxa Tiger Reserve"
                locateUrl="https://www.google.com/maps/place/Buxa+Tiger+Reserve/@26.6170366,89.452043,13z/data=!4m10!1m2!2m1!1sBuxa+Tiger+Reserve!3m6!1s0x39e24f7f1278a6bd:0xeb96d0ba8a85ab85!8m2!3d26.6170366!4d89.5282607!15sChJCdXhhIFRpZ2VyIFJlc2VydmVaFCISYnV4YSB0aWdlciByZXNlcnZlkgENbmF0aW9uYWxfcGFya-ABAA!16zL20vMDhfcTFw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQja0gu7m-QI4Ao0Zdp_i1dwLe6tBf1RZqwxg&s"
                title="Mahananda Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Mahananda+Wildlife+Sanctuary/@26.7961932,88.3604273,17z/data=!3m1!4b1!4m6!3m5!1s0x39e4166120d4ec81:0xe9d73a15eda16b92!8m2!3d26.7961932!4d88.3630076!16zL20vMDN5eWR6?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eDPUVEH5awf-tYu015BdCT1kDBytjJhPwA&s"
                title="Gorumara National Park"
                locateUrl="https://www.google.com/maps/place/Gorumara+National+Park/@26.7563574,88.794899,17z/data=!3m1!4b1!4m6!3m5!1s0x39e38a8bbaa4cbbf:0xf1b23dd6802101f0!8m2!3d26.7563574!4d88.7974793!16zL20vMDh5OTh4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlDrYdTffJzCV6Tu7TMqt11cNOw9OTJrrEg&s"
                title="South City Mall"
                locateUrl="https://www.google.com/maps/place/South+City+Mall/@22.5016616,88.3589205,17z/data=!3m2!4b1!5s0x3a0270d8dd65ff0d:0x3057997f3f8ab57d!4m6!3m5!1s0x3a0270d861b6d22b:0xee3d107a198d3cdf!8m2!3d22.5016616!4d88.3615008!16s%2Fm%2F0j27_61?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://s.rpsg.in/image/s/0/b/72/73/top-bannner_1587925466.jpg"
                title="Quest Mall"
                locateUrl="https://www.google.com/maps/place/Quest+Mall/@22.5389519,88.3631735,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276dfad4bf901:0xfbbe370e3a5a4dc8!8m2!3d22.5389519!4d88.3657538!16s%2Fm%2F0xnmc9r?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/37/New_Market%2C_Kolkata%2C_2011.jpg"
                title="New Market"
                locateUrl="https://www.google.com/maps/place/New+Market+Area,+Dharmatala,+Taltala,+Kolkata,+West+Bengal/@22.5601293,88.3501783,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02770899544e4f:0xdef16b60f9ac451d!8m2!3d22.5600686!4d88.3524678!16s%2Fg%2F1ptzp9wcl?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://kolkata.mallsmarket.com/sites/default/files/photos/malls/AvaniRiversideMall_Howrah_1.jpg"
                title="Avani Riverside Mall"
                locateUrl="https://www.google.com/maps/place/Avani+Riverside+Mall/@22.5632174,88.3211228,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02782b4b85236b:0xf930670bfb37fe43!8m2!3d22.5632174!4d88.3237031!16s%2Fg%2F11byl604sw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://cdn.britannica.com/91/110191-050-7BCFD56B/Victoria-Memorial-Hall-Kolkata-India.jpg"
                title="Kolkata"
                location="Once the capital of British India, it played a major role in India's freedom struggle and is known for its colonial architecture and cultural heritage."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgH1Gbf8hiPVPCfgde3rBXeMpWwL_amAM0tg&s"
                title="Murshidabad"
                location="A former Mughal capital and a key site in the history of Bengal's colonial period, known for its historical palaces."
                />
                <Hover1
                imageSrc="https://i0.wp.com/www.indiatravelogue.com/mindscape/wp-content/uploads/2020/11/shantiniketan.jpg?fit=547%2C343&ssl=1"
                title="Shantiniketan"
                location="Founded by Rabindranath Tagore, this place is known for its contribution to Indian education and culture."
                />
                <Hover1
                imageSrc="https://www.holidify.com/images/bgImages/KALIMPONG.jpg"
                title="Kalimpong"
                location="Known for its historical role as a trade center and its significant Buddhist monasteries."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Weather"
                location="Pack warm clothes for the hills and lighter clothing for the plains, as the weather varies widely."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Local Customs"
                location="Dress modestly in temples and sacred places, and respect local traditions."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Cuisine"
                location="Try local dishes at reputable restaurants to avoid foodborne illnesses."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Transport"
                location="Kolkata traffic can be heavy; plan travel times and use reliable transportation options."
                />
            </div>
        </div>
    )
}
export default WestBengal;