import './App.css';

function App() {
  const developer = "SURAJ KUMAR SHARMA";
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();


  return (
    <>
      <header className='header'>
        <div><h1><span>News</span> Blog </h1></div>
      </header>
      <div className="container">
        <div className="div-1">
          <h2>Arena</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nostrum odit nobis cupiditate, facilis deleniti eligendi exercitationem. Quis repellendus optio labore soluta adipisci maxime, distinctio reiciendis velit! Quisquam cupiditate laborum maxime eligendi, neque est id veritatis! In quas commodi mollitia velit. Consequatur, hic. Sit, accusantium omnis eius recusandae et laudantium qui at facere incidunt corrupti modi eos vel voluptate dicta eveniet inventore repudiandae tempore hic iure dolorum. Dolorum natus aut ullam enim sequi quos, est omnis reiciendis voluptatem lorem50 corrupti sapiente perspiciatis ab, fugit rerum labore? Veniam similique commodi necessitatibus, beatae accusantium, voluptates dolorum quisquam vero illum dolor obcaecati dicta perspiciatis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam vitae corrupti consequuntur mollitia veniam temporibus rem illum nemo? Sequi delectus maiores eaque deserunt illum nesciunt iusto. Modi magnam totam architecto laudantium veniam. Vero earum sunt facilis consequatur a, corporis et quidem dignissimos enim vel ipsam voluptatem dolorum rerum expedita dolorem? Voluptate, rem consequatur! Sunt, praesentium corporis obcaecati quaerat facilis voluptas a debitis ab harum maiores odio esse, odit nisi laborum tempora veritatis enim corrupti consectetur quas excepturi. Officia, autem excepturi, ipsam numquam iusto id dicta ipsum repellat voluptate debitis totam nihil. Velit odit voluptate, amet eum possimus architecto consectetur.
          </p>
        </div>
        <div className="div-2">
          <h2>New</h2>
          <ol  >
            <li>Test News hear</li>
            <li>Test News hear</li>
            <li>Test News hear</li>
            <li>Test News hear</li>
            <li>Test News hear</li>
          </ol>
        </div>

      </div>
      <footer className='footer'>
        <div className="item-1">Developed by <span>{developer}</span></div>
        <div className="item-2">
          <p>Time : <span>{currDate}</span></p>
          <p>Date : <span>{currTime}</span></p>
          </div>

      </footer>
    </>
  );
}

export default App;
