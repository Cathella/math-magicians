import React from 'react';
import Nav from './Nav';
import '../App.css';

const Home = () => <>
  <Nav />
  <div className="home-wrapper">
    <h2>Welcome to our page!</h2>
    <div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius.
      </p>
      <p>
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising
        pain was born and I will give you a complete account of the system, and expound the actual
        teachings of the great explorer of the truth, the master-builder of human happiness.
        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those
        who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
        Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
      </p>
    </div>
  </div>
</>

export default Home;
