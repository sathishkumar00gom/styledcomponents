
import { Buttons, Meltbutton, Orangebutton } from "./Buttonstyled";
import Styles from "./Styled"
import { Contactus } from "./Component/Third"


const App = () => (

  <Styles >
    <div className="container">
      <nav>
        <ul className="ul">
          <li className="li">
            <a href="#" >Home</a>  </li>
          <li className="li">
            <a href="#" >About us</a>  </li>
          <li className="li">
            <a href="#" >Contact us</a>  </li>
          <li className="li">
            <a href="#" >Products</a>  </li>
        </ul>
      </nav></div>
    <div className="img">
      <div className="para">
        <p>According to Dr. Lianne McLeod, the veterinary guide for exotic pets at about.com, top seven are: guinea pigs, rats, hamsters, gerbils, mice, lepard geckos, and Madagascar Hissing Cockroaches. Other animal-care professionals promote birds or fish as ideal first pets for children.</p>
        <button type="submit" className="btn" >We love pets</button>
      </div>
      <img className="imgs" src="https://image.shutterstock.com/image-photo/group-pets-260nw-690150508.jpg" alt="pet animals" />

    </div>

    <div className="products">
      <button type="submit" className="btns" >We love pets</button>
      <div className="paras">
        <p>According to Dr. Lianne McLeod, the veterinary guide for exotic pets at about.com, top seven are: guinea pigs, rats, hamsters, gerbils, mice, lepard geckos, and Madagascar Hissing Cockroaches. Other animal-care professionals promote birds or fish as ideal first pets for children.</p>
      </div>

      <div className="fluid">
        <div className="Card1">
          <img className="img-1" src="https://i.ytimg.com/vi/8fojY1M4ts0/hqdefault.jpg" alt="puppy" />
          <Buttons >Add to buy</Buttons>
        </div>
        <div className="Card2">
          <img className="img-2" src="https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80" alt="cat" />

          <Meltbutton>My Choice</Meltbutton>
        </div>
        <div className="Card3">
          <img className="img-3" src="https://5.imimg.com/data5/CE/GN/IV/SELLER-11167415/osmanabadi-goat-500x500.jpg" alt="puppy" />
          <Orangebutton>Need</Orangebutton>
        </div>

      </div>
    </div>
    <div>
      <Contactus />
    </div>

  </Styles>

)
export default App;
