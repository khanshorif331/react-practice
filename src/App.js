import './App.css';

function App() {
  return (
    <div className="App">
      <Blog heading="This is First Blog" author="Shorif Khan"></Blog>
      <Blog heading="This is Second Blog" author="Rafsan Choto Bhai"></Blog>
      <Blog heading="This is Third Blog" author="Ratul Sinha"></Blog>
      <Blog heading="This is Fourth Blog" author="Jhankar Mahbub"> </Blog>
    </div>
  );
}


function Blog (props){
  const style={
    color:'aquamarine',
    backgroundColor:'white',
    fontSize:40,
  }
  return(
    <div style={{border:'1px solid red',borderRadius:20,margin:20}}>
      <h2 style={style}>{props.heading}</h2>
      <article className='blog'>This is a new blog from me.It is a common thing what I am going to write Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptates quam repudiandae adipisci facere molestias illum corporis id fugit, ab sunt hic dolorum ducimus. Dolor, consequuntur? Numquam culpa dicta libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis molestias repellat culpa corporis, expedita maiores esse sequi aliquam ea modi nam vel! Numquam rerum amet laudantium soluta eaque voluptatum repellat nam! Nemo nesciunt magnam, dignissimos amet rerum facilis dicta?
      <p style={{color:'red',fontSize:20}}>Hey anothe blog is coming for you.Be ready bro for the battle.So Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus accusantium non reiciendis officia debitis, autem, ducimus iure beatae soluta maxime distinctio architecto esse? Voluptatum aspernatur saepe, illum quia perspiciatis corrupti?</p>
      </article>
      <small style={{backgroundColor:'gray',color:'whitesmoke'}}>Author : {props.author}</small>
    </div>
  )  
}


export default App;
