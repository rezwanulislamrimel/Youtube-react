
const Card = () => {
    const Mystyle = {
        
            
        color: "chartreuse",
        fontSize: "15px",
        fontWeight: "bold",
        fontFamily: "Arial",
        textAlign: "center",
        
        
   }
    return (
       
        <>
           
            <div className="card w-96 bg-base-100 shadow-xl"></div>
           
           
           <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Shoes" /></figure>
       
       <div className="card-body">
    <h2 className="card-title ">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    <p style={Mystyle}>100k</p>
            </div>
            </>
            );
          
};

export default Card;