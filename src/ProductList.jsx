import laptop from "./images/laptop.jpg";
import phone from "./images/phone.jpg";
import headphones from "./images/headphones.jpg";

function ProductList() {


    const products = [


        { id: 1,
            name: "Laptop" ,
            description: "High-proformance laptop for professionals.",
            price: 1200,
            image: laptop

        },

        {id: 2,
            name: "phone",
            description: "Latest samartphine with greats camer.",
            price: 800,
            image: phone

        },

        { id: 3,
            name: "Headphones",
            description: "Noise cancelling wireless headphones.",
            price: 200,
            image: headphones
        


        }

    ];

    return (
        <dive>

            { products.map((product) => (

          <div key={product.id} className="product-card">

            <img src={product.image} alt={"product.name"}  width="200"/>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p> price: ${product.price}</p>

            

                </div>


            ))}
        </dive>

);


}


export default ProductList;