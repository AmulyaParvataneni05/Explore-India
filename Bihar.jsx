import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Bihar() {
  return (
    <div>
      <a href='https://tourism.bihar.gov.in/'><h1 className="heading">Bihar</h1></a>
      <h2 className="capital">Capital: Patna</h2>
      <h1 className="sideheadings">Places To Visit</h1>
      <div className="Places">
        <Hover
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhM7RLkTrDdrXhch-_k0QlzIZ9Bn-iowQRQ&s"
          title="Mahabodhi Temple"
          location="Bodh Gaya"
          bookUrl="https://www.trivago.in/en-IN/lm/hotels-bodh-gaya-india?search=200-344848;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Mahabodhi+Temple/@24.6959271,84.9888444,17z/data=!3m1!4b1!4m6!3m5!1s0x39f32c5b4bd80877:0xf8dd2e286fa80c97!8m2!3d24.6959222!4d84.9914193!16zL20vMDFneXl2?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnSIWh1gNQz_e0oJcPsBh1m_WDl3kJAiMFw&s"
          title="Sasaram"
          location="Sasaram"
          bookUrl="https://www.trivago.in/en-IN/lm/hotel-new-maurya-royal-sasaram-patna?search=100-12158596;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Sasaram,+Bihar+821115/@24.9528972,83.9883587,14z/data=!3m1!4b1!4m6!3m5!1s0x398db0cc8035805f:0x186db1ffca1ea333!8m2!3d24.9538803!4d84.0142866!16zL20vMDVsMjds?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZQe1tgtd6Q2hztme-jBnL0lYAi481DIGxA&s"
          title="Pawapuri"
          location="Nalanda"
          bookUrl="https://www.trivago.in/en-IN/lm/hotels-patna-india?search=200-64961;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Pavapuri,+Bihar+803115/@25.090104,85.5280924,16z/data=!3m1!4b1!4m6!3m5!1s0x39f2f6c224c3cf7d:0xcd41808eb4391f5a!8m2!3d25.0878597!4d85.5341852!16zL20vMDVscW1u?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJxOMSYjFK-ZtVizPY119s-WS0nPyxEIFFw&s"
          title="Maner Sharif"
          location="Maner"
          bookUrl="https://www.trivago.in/en-IN/lm/hotels-patna-india?search=200-64961;dr-20240920-20240921"
          locateUrl="https://www.google.com/maps/place/Maner,+Bihar+801108/@25.6475931,84.8649088,15z/data=!3m1!4b1!4m6!3m5!1s0x3992abbf81f9aeed:0x17cc3505dafabadc!8m2!3d25.6475746!4d84.8752085!16s%2Fm%2F04n1dwj?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <h1 className="sideheadings">Culture And Tradition</h1>
      <div className="CultureTradition">
        <Hover3
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6rQ8EyThYl370tafZ_rC6XntVjHw5w5mnCEj0atZiRq5Rbq-caQjGK4OKNcrcqMxfRM&usqp=CAU"
          title="Bidesia"
          location="A traditional folk dance of Bihar featuring expressive storytelling and dramatic gestures, performed to lively music."
          locateUrl='https://www.youtube.com/watch?v=NE0KTCj5tSA'
        />
        <Hover1
          imageSrc="https://c8.alamy.com/comp/2JR9PKJ/portrait-of-happy-bihar-couple-against-white-background-2JR9PKJ.jpg"
          title="Saree and Dhoti"
          location="Women typically wear sarees or salwar kameez, while men often dress in dhoti-kurta or sherwanis."
        />
        <Hover1
          imageSrc="https://www.thestatesman.com/wp-content/uploads/2023/11/Chhath-2023.jpg"
          title="Chhath Puja"
          location="A major Hindu festival dedicated to the Sun God, celebrated with rituals and offerings on the banks of rivers."
        />
        <Hover1
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbxpyhroafItwqJhKwY2dOrCQfJO8X4ODnQ&s"
          title="Bansuri"
          location="The bansuri, a bamboo flute, is a traditional instrument in Bihar's folk music, known for its melodious and soothing tones."
        />
      </div>
      <h1 className="sideheadings">Cuisine</h1>
      <div className="Cuisine">
        <Hover1
          imageSrc="https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg"
          title="Litti Chokha"
          location="A traditional dish featuring litti (round wheat flour balls stuffed with sattu) served with chokha (spicy mashed vegetables like eggplant, tomato, and potato)."
        />
        <Hover1
          imageSrc="https://rakskitchen.net/wp-content/uploads/2017/12/sattu-parahta.jpg"
          title="Sattu Paratha"
          location="A whole wheat flatbread stuffed with sattu (roasted gram flour) and spices, often served with pickles and curd."
        />
        <Hover1
          imageSrc="https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Uma_Raghuraman/bihari_dal_pitha_recipe_traditional_bihari_delicacy.jpg"
          title="Dal Pitha"
          location="Steamed rice cakes filled with a spiced lentil mixture, typically enjoyed with chutney or curry."
        />
        <Hover1
          imageSrc="https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1637034512351-S1MM1G6UIHYR7ITZ2CKH/main-qimg-8d4e0e33822615b3ff4259798f8e2add.jpeg?format=1500w"
          title="Chana Sattu"
          location="Roasted chickpea flour mixed with spices and consumed as a drink or snack, often used for its cooling properties."
        />
      </div>
      <h1 className="sideheadings">Wild Life and Nature</h1>
      <div className="WildLife">
        <Hover2
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyY65HM1bWmZFRyToo5LmZRal6pVAGQVZdrA&s"
          title="Valmiki National Park"
          locateUrl="https://www.google.com/maps/place/Valmiki+Tiger+Reserve/@27.4265778,83.9047939,17z/data=!3m1!4b1!4m6!3m5!1s0x39943f26fafe879f:0x3b1c705682cb2c40!8m2!3d27.4265731!4d83.9073688!16zL20vMDhfcnpz?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdignYA65KwSgAm-2EP5zR13lpNUoK92UnZQ&s"
          title="Kaimur Wildlife Sanctuary"
          locateUrl="https://www.google.com/maps/place/Kaimur+Wildlife+Sanctuary/@24.9075066,83.5290883,17z/data=!3m1!4b1!4m6!3m5!1s0x398e79a08e29a1ad:0x6b0ba93b02de954!8m2!3d24.9075018!4d83.5316632!16s%2Fm%2F0gtx3q0?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGdzi1SbDac6lT3U5BVjzTroPVr9xUKO3Yg&s"
          title="Rajgir Wildlife Sanctuary"
          locateUrl="https://www.google.com/maps/place/RAJGIR+WILDLIFE+SAFARI/@25.0046353,85.4038588,15z/data=!4m10!1m2!2m1!1sRajgir+Wildlife+Sanctuary!3m6!1s0x39f2e590dcf3d997:0x29130801dafb8128!8m2!3d24.9999274!4d85.4242755!15sChlSYWpnaXIgV2lsZGxpZmUgU2FuY3R1YXJ5WhsiGXJhamdpciB3aWxkbGlmZSBzYW5jdHVhcnmSARh3aWxkbGlmZV9hbmRfc2FmYXJpX3BhcmuaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTndNSEpxZW1kM1JSQULgAQA!16s%2Fg%2F11fmh3y_r9?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPOxA-G6WAra86j7rkgz9xPe1PtI0cfU-hA&s"
          title="Sanjay Gandhi Biological Park"
          locateUrl="https://www.google.com/maps/place/Sanjay+Gandhi+Biological+Park,+Patna/@25.6002308,85.0965045,17z/data=!4m10!1m2!2m1!1sSanjay+Gandhi+Biological+Park!3m6!1s0x39ed57f3fb941a21:0xf6abc879953c9a14!8m2!3d25.6002725!4d85.0991341!15sCh1TYW5qYXkgR2FuZGhpIEJpb2xvZ2ljYWwgUGFya1ofIh1zYW5qYXkgZ2FuZGhpIGJpb2xvZ2ljYWwgcGFya5IBA3pvb-ABAA!16s%2Fm%2F04lg8tl?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <h1 className="sideheadings">Shopping Destinations</h1>
      <div className="Shopping">
        <Hover2
          imageSrc="https://helptravelindia.com/wp-content/uploads/2024/07/Centro-Mall-Patna.png"
          title="Centro Mall"
          locateUrl="https://www.google.com/maps/place/Centro+Mall/@25.6002728,85.0784798,14z/data=!4m10!1m2!2m1!1sPatna+Mall!3m6!1s0x39ed585cb114dc59:0xac8707aa5698a383!8m2!3d25.6119003!4d85.1389008!15sCgpQYXRuYSBNYWxsWgwiCnBhdG5hIG1hbGySAQ9zaG9wcGluZ19jZW50ZXLgAQA!16s%2Fg%2F1yg585r25?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHa7lpjnM069xgws6Co2e4r6dMXjZJGX6hA&s"
          title="P&M Mall"
          locateUrl="https://www.google.com/maps/place/P%26M+Mall/@25.6340346,85.1037787,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed577e021a41ff:0x619f6dd3ed125a3d!8m2!3d25.6340298!4d85.1063536!16s%2Fm%2F0hgn167?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://static.wixstatic.com/media/10e1ad_d7ea3a12e74340ddb1a70afd6505d0cc~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10e1ad_d7ea3a12e74340ddb1a70afd6505d0cc~mv2.jpg"
          title="City Centre Mall"
          locateUrl="https://www.google.com/maps/place/City+Centre+Mall/@25.6176349,85.13272,17z/data=!4m10!1m2!2m1!1sCity+Centre+Mall!3m6!1s0x39ed584500e52619:0x4e33d67f5b7e4e22!8m2!3d25.6176205!4d85.1352949!15sChBDaXR5IENlbnRyZSBNYWxsWhIiEGNpdHkgY2VudHJlIG1hbGySAQ9zaG9wcGluZ19jZW50ZXLgAQA!16s%2Fg%2F11kbtkvthl?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
        <Hover2
          imageSrc="https://static.toiimg.com/thumb/86169252/Chandni-Chowk.jpg?width=1200&height=900"
          title="Chandani Chowk"
          locateUrl="https://www.google.com/maps/place/Chandani+Chowk,+Sheikhpura,+Bihar+811105/@25.1411043,85.8351291,17z/data=!3m1!4b1!4m6!3m5!1s0x39f243f012bad1b1:0x3522bf0ab8eb71a4!8m2!3d25.1410995!4d85.837704!16s%2Fg%2F11bz4v6ydb?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <h1 className="sideheadings">Historical Significance</h1>
      <div className="Historical">
        <Hover1
          imageSrc="https://miro.medium.com/v2/resize:fit:1400/1*-dlcVZBPPDPJvk71zJT09Q.jpeg"
          title="Nalanda University"
          location="An ancient center of learning, renowned as one of the earliest residential universities in the world."
        />
        <Hover1
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkphX3HxTlRX5UEVuO9UrmPmhRyXyA-3gWTw&s"
          title="Bodh Gaya"
          location="The location where Gautama Buddha attained enlightenment, featuring the Mahabodhi Temple, a UNESCO World Heritage site."
        />
        <Hover1
          imageSrc="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/c2bab1071c59adec2bfd0b1f98a283e8_1000x1000.jpeg"
          title="Vaishali"
          location="Known for its early democracy and as the birthplace of Jainism, with ruins and ancient stupas reflecting its historical importance."
        />
        <Hover1
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrqpkNZnrxShGKDLvd6GuOOVPBZ1oq0qn6w&s"
          title="Rajgir"
          location="An ancient city with historical and religious significance, featuring sites linked to both Buddhism and Jainism."
        />
      </div>
      <h1 className="sideheadings">Travel Tips</h1>
      <div className="Historical">
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="Safety"
          location="Stay alert, avoid traveling alone at night, and be cautious with your belongings."
        />
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="Local Customs"
          location="Dress modestly and respect local traditions, especially in religious sites."
        />
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="Weather"
          location="Dress for extreme temperatures and stay hydrated; avoid travel during heavy monsoons."
        />
        <Hover1
          imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
          title="Transport"
          location="Choose reliable transport and allow extra time for travel due to variable road conditions."
        />
      </div>
    </div>
  );
}
export default Bihar;