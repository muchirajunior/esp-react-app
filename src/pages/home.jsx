import './style.scss'

function Home(props) {
    return (
        <div className='home'>
            <div className='home-banner'>
                <div className='home-header'>ESP IOT</div>
                <p className='home-banner__text' >  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellat, 
                quam, esse accusamus, at deleniti dignissimos facere officiis accusantium soluta nesciunt quis enim veritatis officia
                 asperiores maiores minima voluptas sit? </p>
            </div>
            
            <button className='create-project-button' onClick={()=>props.history.push('/create')}>create new project</button>
            <button className='view-project-button'  onClick={()=>props.history.push('/projects')}  >view all project</button>
        </div>
    );
}

export default Home;