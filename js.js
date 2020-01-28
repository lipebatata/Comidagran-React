class BarraNav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light border-bottom" style={{backgroundColor: '#e3f2fd'}}>
                <button type="button" id="tirarfoto" className="btn btn-outline-danger">Tirar foto</button>
                <a className="navbar-brand" href="#">Comidagram</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Novo Post</a>
                  </div>
                </div>
             </nav>  
        )
    }
}

class Amigos extends React.Component{
        render(){
        return(
            <div>
                <div class="barra-amigos d-flex justify-content-around border-bottom p-2">
                    <button type="button" id="botao-amigo-1" class="btn btn-outline-secondary rounded-circle bg-white" >X</button>
                    <button type="button" id="botao-amigo-1" class="btn btn-outline-secondary rounded-circle bg-white" >X</button>
                    <button type="button" id="botao-amigo-1" class="btn btn-outline-secondary rounded-circle bg-white" >X</button>
                    <button type="button" id="botao-amigo-1" class="btn btn-outline-secondary rounded-circle bg-white" >X</button>
                    <button type="button" id="botao-amigo-1" class="btn btn-outline-secondary rounded-circle bg-white" >X</button>

                </div>    
            </div>
        )
    }
}
class Publicacoes extends React.Component {
    constructor(){
        super()
                this.state = { 
            posts:[
                {
                    fotodoU:'https://i.pinimg.com/736x/af/53/55/af5355d2e928deb428fd3961a317cca4.jpg',
                    nomedoU:'Giorno Giovanna',
                    post: 'https://i.ytimg.com/vi/YFOhH_3Zfs8/maxresdefault.jpg'

                },

                {
                    fotodoU:'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/01/Featured-Image-Dio-Brando-Cropped.jpg',
                    nomedoU:'Dio Brando',
                    post: 'https://images7.memedroid.com/images/UPLOADED818/5ddc618db7016.jpeg'
                }
            ]

        }
    }
    render(){
        return(
            <div>
            {
                this.state.posts.map ((post)=> { 
                    return(
                        <Publicacao nomedoU={post.nomedoU} fotodoU={post.fotodoU} post={post.post}/>  
                    )
                })
            }
            </div>
        )
    }
}
class Publicacao extends React.Component{
    render(){
        return(
            <div class="publicacao conteiner-fluid">
                <div class="dados p-3">
                    <img src= {this.props.fotodoU} class="rounded" style={{maxHeight: '50px', height: '50px',}}/>
                    <span> {this.props.nomedoU} </span>
                </div>
        
                <div class="imagem bg-secondary d-flex flex-column justify-content-center" style={{maxHeight: '390px', height: '390px',}}>
                    <img src= {this.props.post} class="mn-100 img-fluid "/>
                </div>
            
                <div class="botoes p-2">
                    <button class="btn btn-info">X</button>
                    <button class="btn btn-warning">X</button>        
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    render ()
    {
        return(
            <div>
                <BarraNav/>      
                <Amigos/>    
                <Publicacoes/>
            </div>
        )

    }
}

ReactDOM.render(
    
    <App/>,    
    
    document.querySelector("#app") 
)