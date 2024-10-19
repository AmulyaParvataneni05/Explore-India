import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function ArunachalPradesh()
{
    return(
        <div>
            <a href='https://arunachaltourism.com/'><h1 className='heading'>Arunachal Pradesh </h1></a>
            <h2 className='capital'>Capital: Itanagar</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMU_oocNVuvoaUtumr1c52ce3A__X2Vogirg&s"
                title="Tawang Monastery"
                location="Tawang"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-tawang-india?search=200-426072;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Tawang+Monastery/@27.5867289,91.8568469,18z/data=!3m1!4b1!4m6!3m5!1s0x375cf5a73c4189b9:0x62f60b408839e67e!8m2!3d27.5867261!4d91.8577194!16s%2Fm%2F07s3s15?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTvxLh5Cn0W943u3MR2i8HbEz3sTUdhQAiA&s"
                title="Ziro Valley"
                location="Ziro"
                bookUrl="https://www.trivago.in/en-IN/lm/ziro-valley-resorts-itanagar?search=100-7192948;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Ziro+791120/@27.5465525,93.8078328,15z/data=!4m6!3m5!1s0x3741612864517cd3:0xb9e78639773cc4ea!8m2!3d27.544912!4d93.8196686!16zL20vMDJfZzNw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxR0lWM-PMqAAN1OwrHmxX5D2r9A_W39EbmA&s"
                title="Bombdila Monastery"
                location="Bombdila"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-bomdila-india?search=200-426114;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Bomdila+790001/@27.2627541,92.4063706,15z/data=!3m1!4b1!4m6!3m5!1s0x375cac629073c86d:0x43cb4639e0d118bd!8m2!3d27.2644943!4d92.4159308!16zL20vMDVuNjU5?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VZQxaIcPzH9JU7AMLnEcaCGLvpiTS6fIUA&s"
                title="Indira Gandhi Park"
                location="Itanagar"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-itanagar-india?search=200-64959;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Itanagar/@27.0845653,93.5932372,14z/data=!3m1!4b1!4m6!3m5!1s0x3744009342853ecd:0xdeec075656369e83!8m2!3d27.0843682!4d93.6053163!16zL20vMDNjamIx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8k8UN1zm-VVinl6BGsOweEY-_SpddAreIQ&s"
                title="Bardo Chham"
                location="A traditional dance performed by the Monpa tribe during festivals."
                locateUrl='https://www.youtube.com/watch?v=62NEcNTZQOg'
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tai_Khampti_diorama.JPG/1200px-Tai_Khampti_diorama.JPG"
                title="Khamti Shawl"
                location="Handwoven textiles featuring intricate designs and vibrant colors, worn by the Khamti tribe."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VqI-7VAczjld_HfBQpEJ-CLrCyfFpM1g2g&s"
                title="Losar"
                location="The Tibetan New Year celebrated with colorful dances and rituals."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxGD_t74oRQQpEfT9hs1bh-XapW9AWGzIBg&s"
                title="Traditional Bamboo Flute"
                location="A common musical instrument used in various tribal ceremonies and folk performances."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytf3t6oyYz_SUoEWX5mgOmJGzSDwaK2NwPw&s"
                title="Thukpa"
                location="A hearty noodle soup with vegetables or meat, commonly enjoyed as a warming meal."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H8du8QRk8yCXZLTkgBrUgfeYelEEeSUhfQ&s"
                title="Momos"
                location="Steamed or fried dumplings filled with vegetables or meat, a popular snack or appetizer."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXvH_l76Gs5A9SaFoiO3fVc6QftOH1tteAg&s"
                title="Pork with Bamboo Shoot"
                location="A savory dish made with tender pork and tangy bamboo shoots, often cooked with local spices."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi78NBdT8Rbd5kY8K-eLLKK95ZIV4ugVKozA&s"
                title="Ema Datshi"
                location="A spicy cheese and chili dish, though more commonly associated with Bhutan, it’s also enjoyed in parts of Arunachal Pradesh."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2vQqR_P8HCblJK2D2NIe-8GHRqubcyovdA&s"
                title="Namdapha National Park"
                locateUrl = "https://www.google.com/maps/place/Namdapha+National+Park+%26+Tiger+Reserve/@27.4770469,96.3881556,11z/data=!3m1!4b1!4m6!3m5!1s0x373e8d127c4f1835:0x78a85d849b34eea!8m2!3d27.4454717!4d96.5358093!16zL20vMDhfeDBr?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC0X2DIEQhL6-EScVpPdARkAp6I1caQVBLw&s"
                title="Mouling National Park"
                locateUrl="https://www.google.com/maps/place/Mouling+National+Park/@28.4738185,94.7458715,17z/data=!3m1!4b1!4m6!3m5!1s0x374018e5cce3b903:0xe2690079c4fad063!8m2!3d28.4738185!4d94.7484518!16zL20vMDhfdmQx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nqIJjRE018rTf67pJfL6SKMLYZCcpU-wCw&s"
                title="Khamlang Wildlife Sanctuary"
                locateUrl= "https://www.google.com/maps/search/Khamlang+Wildlife+Sanctuary/@25.521334,89.9032059,7z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WnfkXnubnDcm9EKhOA0mnZUfJHlcs5RbDA&s"
                title="Sessa Orchid Sanctuary"
                locateUrl="https://www.google.com/maps/place/Sessa+Orchid+Sanctuary/@27.1069027,92.5227423,17z/data=!3m1!4b1!4m6!3m5!1s0x3744ab0cf0698dd5:0xb686238015390092!8m2!3d27.1069027!4d92.5253226!16s%2Fg%2F11t_md1gdx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://www.onlinetraveldiaries.com/wp-content/uploads/2019/08/craft-centre-emporium-itanagar.jpg"
                title="Itanagar Market"
                locateUrl="https://www.google.com/maps/place/Ganga+market/@27.080744,93.5917258,14z/data=!4m10!1m2!2m1!1sItanagar+Market!3m6!1s0x374407d185955e3d:0xedb0804d5d1f5f7f!8m2!3d27.0866204!4d93.6113146!15sCg9JdGFuYWdhciBNYXJrZXRaESIPaXRhbmFnYXIgbWFya2V0kgEGbWFya2V0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5xZWpsRVlUUlJSUkFC4AEA!16s%2Fg%2F11rr2vddvh?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://thenortheasttravelblog.com/wp-content/uploads/2017/07/hapoli-market-ziro.png"
                title="Ziro Market"
                locateUrl="https://www.google.com/maps/search/Ziro+Market/@27.5667232,93.805785,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://lemonicks.com/wp-content/uploads/2022/12/Ama-Market-Bomdila-IMG_20220921_111055.jpg"
                title="Bomdila Market"
                locateUrl="https://www.google.com/maps/place/Bomdila+Market/@27.2617301,92.4183594,17z/data=!3m1!4b1!4m6!3m5!1s0x375cad6cf776578f:0xb597d4d0fdef6951!8m2!3d27.2617301!4d92.4209397!16s%2Fg%2F11fkyxkh68?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicRAILPKKH7fEVUSgsoh0LZb8PfV35JF_0A&s"
                title="Tawang Market"
                locateUrl="https://www.google.com/maps/place/Old+Market/@27.5945555,91.2612491,10z/data=!4m10!1m2!2m1!1sTawang+Market+arunachal!3m6!1s0x375cf5bcb408db83:0x587cfd4f85a74e68!8m2!3d27.5945555!4d91.8709903!15sChdUYXdhbmcgTWFya2V0IGFydW5hY2hhbFoZIhd0YXdhbmcgbWFya2V0IGFydW5hY2hhbJIBBm1hcmtldJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNdGJpMU1ibkpuUlJBQuABAA!16s%2Fg%2F11rvls8k0_?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSMsies0uwa8SLFuaFlQ-C0dwf5GwNIqXCw&s"
                title="Tawang War Memorial"
                location="A monument commemorating the bravery of Indian soldiers who fought in the Sino-Indian War of 1962."
                />
                <Hover1
                imageSrc="https://media.tripinvites.com/places/itanagar/ita-fort/beautiful-view-of-ita-fort.jpg"
                title="Ita Fort"
                location="An ancient fort in Itanagar, known for its historical significance and remnants of the 14th-century architecture."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5vcyLhvuSVpBjeTVJw7A0DvRULkTjFiUpQ&s"
                title="Taktsang Monastery"
                location="A revered Buddhist monastery in Tawang, known for its historical and spiritual importance in Tibetan Buddhism."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoitwRTtRjgBPtbIGt8Oy-nFLpgrcw7BPfF5iLRZ7n9Ut0fdd7W03Q1BpxkyJpqS0B2k8&usqp=CAU"
                title="Dirang Dzong"
                location="A historical fort in Dirang, significant for its role in regional defense and cultural heritage."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Permits Required"
                location="Ensure you have the Inner Line Permit (ILP) for Arunachal Pradesh, as it is required for non-residents."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = 'Prepare for Weather'
                location="The weather can vary greatly, so pack layers and be prepared for cold temperatures, especially in higher altitudes."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Respect Local Customs"
                location="Follow local customs and traditions, especially when visiting tribal areas and religious sites."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Carry Cash"
                location="ATMs may be scarce in remote areas, so carry sufficient cash for your travels and purchases."
                />
            </div>
        </div>
    )
}
export default ArunachalPradesh;
