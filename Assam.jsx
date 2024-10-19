import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Assam() {
  return (
    <div>
      <a href='https://tourism.assam.gov.in/'><h1 className="heading">Assam</h1></a>
      <h2 className="capital">Capital: Dispur</h2>
      <h1 className="sideheadings">Places To Visit</h1>
      <div className="Places">
        <Hover
          imageSrc="https://www.kaziranganationalpark-india.com/images/majuli-island.jpg"
          title="Majuli Island"
          location="Jorhat"
          bookUrl="https://www.trivago.in/en-IN/lm/hotels-jorhat-india?search=200-424211;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Majuli/@27.0076977,94.029863,11z/data=!3m1!4b1!4m6!3m5!1s0x3746c41068c5707f:0x3dd7532bf70e8c60!8m2!3d27.0016172!4d94.2242981!16zL20vMDNsY3B4?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover
          imageSrc="https://static.toiimg.com/thumb/112013182/Umananda-island-in-Guwahati.jpg?width=1200&height=900"
          title="Umananda Island"
          location="Guwahati"
          bookUrl="https://www.trivago.in/en-IN/lm/hotels-guwahati-india?search=200-344953;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Peacock+Island/@26.1964675,91.7424355,17z/data=!3m1!4b1!4m6!3m5!1s0x375a5a18099b9839:0xbd808099fd834c8e!8m2!3d26.1964922!4d91.7449079!16s%2Fm%2F0jt5bn8?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsw5igKnONmb9jw8nqQZefkRBdd_-S4ywiAA&s"
          title="Haflong"
          location="Haflong"
          bookUrl="https://www.trivago.in/en-IN/lm/landmark-hotels-haflong-shillong?search=100-3475440;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Haflong,+Assam+788819/@25.1741556,92.9915409,14z/data=!3m1!4b1!4m6!3m5!1s0x374fa3e329fdadf3:0xe2ff7a660d6272c8!8m2!3d25.1688028!4d93.0177433!16zL20vMDVwOWs1?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover
          imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/07/82/4f/mai-temple.jpg?w=1400&h=1400&s=1"
          title="Dibrugarh"
          location="Dibrugarh"
          bookUrl="https://www.trivago.in/en-IN/lm/hotels-dibrugarh-india?search=200-424215;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Dibrugarh,+Assam/@27.4704019,94.8763938,13z/data=!3m1!4b1!4m6!3m5!1s0x3740980349fd8f55:0x3074a52b10b24bd4!8m2!3d27.4705449!4d94.9124625!16zL20vMDliZzh6?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <h1 className="sideheadings">Culture and Tradition</h1>
      <div className="CultureTradition">
        <Hover3
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/48/Bihu-Dance-assam.jpg"
          title="Bihu Dance"
          location="A lively folk dance performed during Bihu festivals, featuring energetic movements and rhythmic beats."
          locateUrl='https://www.youtube.com/watch?v=7wD_kIfK7Cc'
        />
        <Hover1
          imageSrc="https://www.holidify.com/images/cmsuploads/articles/6.jpg"
          title="Mekhela Chador and Dhoti"
          location="Women wear Mekhela Chador,while men don Dhoti and Kurta,often paired with Assamese Gamosa."
        />
        <Hover1
          imageSrc="https://morungexpress.com/uploads/2024/01/32061816_1705317369_4124dbddb814787fc69fc67b889266d0.jpg"
          title="Bihu Festival"
          location="A major festival celebrating the Assamese New Year with traditional dances, feasts, and cultural performances."
        />
        <Hover1
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7eXhrkltKgXne2Qrn2kMgJgO3mm0GQ3eZA&s"
          title="Dhol and Pepa"
          location="The Dhol and Pepa are commonly used in Assamese folk music, creating rhythmic and melodious sounds."
        />
      </div>
      <h1 className="sideheadings">Cuisine</h1>
      <div className="Cuisine">
        <Hover1
          imageSrc="https://booking.thesonahotel.com/storage/2022/09/Assamese-Thali-e1473570538588.jpg"
          title="Assamese Thali"
          location="A traditional platter featuring rice, fish curry, meat dishes, and vegetables.          "
        />
        <Hover1
          imageSrc="https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1631001297057-LSX3T3T1P0GPL0BYFAFJ/black+lentils+khar+with+papaya+and+mustard+leaves.jpg?format=1500w"
          title="Khar"
          location="A tangy dish made with raw papaya, pulses, and a unique alkaline ingredient, usually soda."
        />
        <Hover1
          imageSrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201605/story-masortenga-payel_647_051816025835.jpg?VersionId=ZJovhaP7r.eBxfG_gh.ImJgE16c2HIKZ"
          title="Masor Tenga"
          location="A sour fish curry cooked with tomatoes, lemons, or tamarind, providing a tangy flavor."
        />
        <Hover1
          imageSrc="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/28-march/Sweet_Rice_Dumplings_Recipe_Mohura_Pitha-1.jpg"
          title="Pitha"
          location="Rice cakes often filled with jaggery or coconut, enjoyed as a snack or dessert."
        />
      </div>
      <h1 className="sideheadings">Wild Life and Nature</h1>
      <div className="WildLife">
        <Hover2
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/f/fe/Beauty_of_Kaziranga_National_Park.jpg"
          title="Kaziranga National Park"
          locateUrl="https://www.google.com/maps/place/Kaziranga+National+Park/@26.5824349,93.1232125,11z/data=!4m10!1m2!2m1!1sKaziranga+National+Park!3m6!1s0x3744412d379f65df:0x8b2b74b6e7c99458!8m2!3d26.6445044!4d93.3524858!15sChdLYXppcmFuZ2EgTmF0aW9uYWwgUGFya1oZIhdrYXppcmFuZ2EgbmF0aW9uYWwgcGFya5IBDW5hdGlvbmFsX3BhcmvgAQA!16zL20vMDNkMGxt?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://www.kaziranganationalpark-india.com/images/manas-national-park-safari3.jpg"
          title="Manas National Park"
          locateUrl="https://www.google.com/maps/place/Manas+National+Park/@26.8101791,91.2369083,17z/data=!3m1!4b1!4m6!3m5!1s0x37596e8ccb18febf:0x4bcf99d7c6732bfd!8m2!3d26.8101743!4d91.2394832!16s%2Fm%2F0262656?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://m.economictimes.com/thumb/msid-75851349,width-1200,height-900,resizemode-4,imgsize-792667/1.jpg"
          title="Dibru-Saikhowa National Park"
          locateUrl="https://www.google.com/maps/place/Dibru+Saikhowa+National+Park/@27.6690422,95.359972,17z/data=!3m1!4b1!4m6!3m5!1s0x373f73ac42a8ef8f:0x8837c490abd190d!8m2!3d27.6690375!4d95.3625469!16zL20vMDhfcXJs?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://pbs.twimg.com/media/E3LIFrFVUAAIzpG?format=jpg&name=large"
          title="Nameri National Park"
          locateUrl="https://www.google.com/maps/place/Nameri+National+Park+And+Forest+Reserve/@26.965012,92.7523669,13z/data=!4m10!1m2!2m1!1sNameri+National+Park!3m6!1s0x3744974186dcd373:0x6a24c6e22fd47cfa!8m2!3d26.9324008!4d92.8772163!15sChROYW1lcmkgTmF0aW9uYWwgUGFya1oWIhRuYW1lcmkgbmF0aW9uYWwgcGFya5IBDW5hdGlvbmFsX3BhcmvgAQA!16zL20vMDhfeGNo?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <h1 className="sideheadings">Shopping Destinations</h1>
      <div className="Shopping">
        <Hover2
          imageSrc="https://aroundguwahati.wordpress.com/wp-content/uploads/2017/09/img-20170921-wa0001-012.jpeg"
          title="Fancy Bazaar"
          locateUrl="https://www.google.com/maps/place/Fancy+Bazaar,+Guwahati,+Assam/@26.1828467,91.7354957,16z/data=!3m1!4b1!4m6!3m5!1s0x375a5a305dda0ddb:0xe4536c4649dbacb3!8m2!3d26.1830738!4d91.7404977!16s%2Fm%2F0ql15yx?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://media.gettyimages.com/id/525114748/photo/melorin-chasing-master-makes-cooper-pan-esfahan-iran.jpg?s=612x612&w=gi&k=20&c=njdh4aT23_iTcoPMneyXCADHsqZrLkerCcMQWI02uQE="
          title="Pan Bazaar"
          locateUrl="https://www.google.com/maps/place/Pan+Bazaar,+Guwahati,+Assam/@26.1863401,91.7404512,16z/data=!3m1!4b1!4m6!3m5!1s0x375a5a25e55856b1:0x5e71de52f9b47851!8m2!3d26.1859679!4d91.7453642!16s%2Fm%2F0285x7q?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://static.toiimg.com/photo/57751048.cms"
          title="Paltan Bazaar"
          locateUrl="https://www.google.com/maps/place/Paltan+Bazaar,+Guwahati,+Assam/@26.1786421,91.7464491,16z/data=!3m1!4b1!4m6!3m5!1s0x375a5a2946bc373f:0x68efe4d996207ee8!8m2!3d26.1792286!4d91.7532732!16s%2Fm%2F0288xld?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRca1joonCZtl9Yi8iluajEduizmysO8Veh_w&s"
          title="Central Mall"
          locateUrl="https://www.google.com/maps/place/Central+Mall/@26.16126,91.7736836,16z/data=!4m10!1m2!2m1!1scentral+mall+guwahati!3m6!1s0x375a5986cd7aa9ab:0x1a7946c3ae41ad3d!8m2!3d26.1573661!4d91.7779482!15sChVjZW50cmFsIG1hbGwgZ3V3YWhhdGlaFyIVY2VudHJhbCBtYWxsIGd1d2FoYXRpkgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F11lt61mm5b?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <h1 className="sideheadings">Historical Significance</h1>
      <div className="Historical">
        <Hover1
          imageSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuKFbpo7gm7YP3HN6dAFksJacgTmFDS7NaGIo_7Pvn9W_hcXaagK4OYg0nG_JkMzyDiUUIHPPMoGK9ymoknxIBFkiS_Ehnmm2RKo9HyPGy-V3A7ur_1RA0Bme-5DbDEbwf0pY8PMVqoJrr/s1600/2.jpg"
          title="Rang Ghar"
          location="A historic amphitheater built by the Ahom kings, symbolizing the royal past of Assam and its architectural prowess."
        />
        <Hover1
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWI81UIbgt0Yaykkd--ojvyxDuSV1mQfuwg&s"
          title="Talatal Ghar"
          location="A seven-story palace from the Ahom dynasty, showcasing the rich heritage and strategic military architecture."
        />
        <Hover1
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBlo0M3U_g0DmXJIxoTSJvCWOG7XlBtBZww&s"
          title="Kamakhya Temple"
          location="One of the oldest and most revered Shakti temples in India, associated with tantric worship."
        />
        <Hover1
          imageSrc="https://res.cloudinary.com/chasset/c_fill,e_improve,f_webp,h_480,w_720/hbimages/desktop/1503491797026-Agnigarh%20Hill.jpg"
          title="Agnigarh"
          location="A mythologically significant hillock linked to the legend of Usha and Aniruddha, representing Assam's ancient stories."
        />
      </div>
      <h1 className="sideheadings">Travel Tips</h1>
      <div className="Historical">
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="Cultural Sensitivity"
          location="Be respectful of local customs, especially in religious and tribal areas. Dress modestly when visiting temples."
        />
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="Permits"
          location="Some parts of Assam, especially in the northeast, may require permits for tourists. Check in advance if traveling to border areas."
        />
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="Transport"
          location="Road conditions can be rough, particularly in rural areas. Opt for reliable vehicles and be patient with travel times.          "
        />
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="River Safety"
          location="If taking river cruises on the Brahmaputra, ensure safety standards are followed, especially during the rainy season."
        />
      </div>
    </div>
  );
}
export default Assam;

