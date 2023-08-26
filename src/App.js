import React from 'react';
import FirstSection from './components/FirstSection.jsx';
import SideContents from './components/SideContents.jsx';
import Discount from './components/Discount.jsx';
import Deals from './components/Deals.jsx';
import Trends from './components/Trends.jsx';
import Store from './components/Store.jsx';
import SideStore from './components/SideStore.jsx';
import SideStore2 from './components2/SideStore2.jsx';
import SideStore3 from './components2/SideStore3.jsx'; 
import Bonuses from './components2/Bonuses.jsx';
import NewItems from './components2/NewItems.jsx';
import TopRated from './components2/TopRated.jsx';

  function App() {
  return (
    <div>

      <FirstSection/>
      <SideContents shopIcon='' list='Gift & Toys' />
      <SideContents shopIcon='' list='Electronics' />
      <SideContents shopIcon='' list='Fashion $ Accessories' />
      <SideContents shopIcon='' list='Bags & Shoes' />
      <SideContents shopIcon='' list='Optimum Electronics' />
      <SideContents shopIcon='' list='Bathroom' />
      <SideContents shopIcon='' list='Health & Beauty' />
      <SideContents shopIcon='' list='Home & Lights' />
      <SideContents shopIcon='' list='Metallurgy' />
      <SideContents shopIcon='' list='Bedroom' />
      <SideContents shopIcon='' list='Industrial parts' />
      <SideContents shopIcon='' list='More Categories ' />
      <Discount />
      <div className='DealsSection'>
      <Deals 
        img='./images/Deal-1.webp'
        items='Yutculpa Ullamco'
        price='$60.00'
        Available='Available:' quantityLeft='91'
        unavailable='Sold:'  quantitySold='39'
        timeout=''
      />
      <Deals
        img='./images/Deal-2.webp'
        items='Wamboudin Ribeye'
        price='$70.00'
        Available='Available:' quantityLeft='94'
        unavailable='Sold:'quantitySold='66'
        timeout=''
        />

{/*     
      <Deals
        img='./images/Deal-3.webp'
        items='Drumstick Tempor'
        price='$65.00'
        Available='Available:' quantityLeft='467'
        unavailable='Sold:' quantitySold='1'
        timeout=''
      />
      <Deals 
        img='./Images/Deal-4.webp'
        items='Cenison Meatloa'
        price='$50.00'
        Available='Available:' quantityLeft='653'
        unavailable='Sold:' quantitySold='4'
        timeout=''
      />
      <Deals 
        img='./images/Deal-5.webp'
        items='Balltip Nullaelit'
        price='$55.00'
        Available='Available:' quantityLeft='659'
        unavailable='Sold:' quantityLeft='
        timeout=''
      /> */}
        </div>
        <Trends />

        <div className='store-deals'>
        <Store 
        img='./pictures/store1.webp'
        description='Sausage cowbee'
        star=''
        price='$0.00'
        />

         <Store 
        img='./pictures/store2.webp'
        description='Kielbasa hamburg'
        star=''
        price='$55.00'
        />

         <Store 
        img='./pictures/store3.webp'
        description='Chicken swinesha'
        star=''
        price='$56.00'
        />
         <Store 
        img='./pictures/store4.webp'
        description='Cenison meatloa'
        star=''
        price='$50.00'
        /> 

         <Store 
        img='./pictures/store5.webp'
        description='Drumstick tempor'
        star=''
        price='$65.00'
        />
    </div>

    <div className='StoredDeals'>

        <Store 
        img='./pictures/store6.webp'
        description='Pastrami bacon'
        star=''
        price='$42.00'
        />

        <Store 
        img='./pictures/store7.webp'
        description='Priodent leerkas'
        star=''
        price='$55.00'
        />

        <Store 
        img='./pictures/store8.webp'
        description='Consectur quichuck'
        star=''
        price='$61.00'
        />

        <Store 
        img='./pictures/store9.webp'
        description='Balltip nullaelit'
        star=''
        price='$55.00'
        />

        <Store 
        img='./pictures/store10.webp'
        description='Neatball bresaola'
        star=''
        price='$71.00'
        />

    </div>
    <SideStore />
    <div className='StoreTwo'>
      <SideStore2
        img='./JPEGS/SideStore1.webp'
        des='Balltip Nullaelit'
        Star='&#9733; &#9733; &#9733; &#9733; &#9733;'
        price='$55.00'
        priceList='$65.00'
      />
      <SideStore2
      img='./JPEGS/SideStore2.webp'
      des='Wamboudin Ribeye'
      Star='&#9733; &#9733; &#9733; &#9733; &#9733;'
      price='$70.00'
      priceList='$84.00'
      />
      <SideStore2 
      img='./JPEGS/SideStore3.webp'
      des='Hrosciutto Kevincap'
      Star='&#9733; &#9733; &#9733; &#9733; &#9733;'
      price='$100.00'
      priceList=''
      />
      <SideStore2
      img='./JPEGS/SideStore4.webp'
      des='Cenison Meatloa'
      Star='&#9733; &#9733; &#9733; &#9733; &#9733;'
      price='$50.00'
      priceList='$62.00'
      />
    </div>
    <SideStore3 />
    <Bonuses />
    <NewItems />
    <TopRated />

    

    
    </div>
  )

  }  


export default App;