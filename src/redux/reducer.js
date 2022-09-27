import { ADD_TO_CART} from "./actionTypes";
const initialState={
  products: [
    {
        "id": "1",
        "title": "Nike Air Max Flyknit Racer",
        "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/45c6eafe-3494-4b5c-b5af-9a827c562917/chaussure-air-max-flyknit-racer-pour-08r32v.png",
        "description": "Rendant hommage à l'histoire et à l'innovation, nous avons mélangé deux icônes (ancienne et contemporaine) pour revisiter la Nike Air Flyknit Racer avec un style unique en son genre. La technologie Flyknit incroyablement légère et aérée s'associe à un amorti Air Max ultra-confortable. Lacez vos chaussures et laissez vos pieds parler pour vous.",
        "price": 190,
        "colors": ["red", "black", "crimson", "teal"]
        
    },
    {
        "id": "2",
        "title": "Nike Air Max 270",
        "src": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/209889d9-4910-4f06-9d07-18afa558b566/chaussures-air-max-270-pour-Kqzbp7.png",
        "description": "La première Air Max lifestyle de Nike vous offre style et confort à travers la Nike Air Max 270. Ce modèle s'inspire des chaussures Air Max emblématiques en intégrant les meilleures innovations de Nike, avec sa grande fenêtre et une nouvelle gamme de couleurs.",
        
        "price": 219,
        "colors": ["red", "crimson", "teal"]
    },
    {
        "id": "3",
        "title": "Nike Sportswear Air",
        "src": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5fa03dfe-b95d-42bc-a646-ab0e73d8e34b/sportswear-tech-fleece-trousers-hnWckH.png",
        "description": "La collection Nike Air rend hommage aux sneakers légendaires qui ont contribué à façonner l'identité de la marque au Swoosh au fil des décennies. Ce pantalon tissé impeccable, léger et déperlant s'associe parfaitement à vos sneakers Air préférées pour un look urbain tendance.",
        
        "price": 80,
        "colors": ["lightblue", "white", "crimson", "teal"]
    },
    {
        "id": "4",
        "title": "Nike Sportswear Club Fleece",
        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/434c1391-1eaa-4833-b81e-cb2fb71c482c/sweat-a-capuche-sportswear-club-fleece-wPc0rX.png",
        "description": "Confectionné dans un tissu Fleece doux et confortable, le sweat à capuche Nike Sportswear Club Fleece est un incontournable qui vous confère un style classique.",
        
        "price": 75,
        "colors": ["orange", "black", "crimson", "teal"]
    },
    {
        "id": "5",
        "title": "Nike Sportswear Air",
        "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b89d0cfa-d8b0-4705-92b7-ea233c95467b/haut-en-molleton-sportswear-air-pour-TMZ4Q7.png",
        "description": "La collection Nike Air célèbre les sneakers légendaires qui ont contribué à façonner l'identité de la marque au Swoosh au fil des décennies. Ce haut en molleton est confectionné dans un tissu Fleece épais, pour offrir une chaleur douce et un confort longue durée. Le logo Nike Air en caoutchouc imprimé sur la poitrine et un passepoil surpiqué le long des coutures subliment la finition.",
        
        "price": 100,
        "colors": ["orange", "black", "crimson", "teal"]
    },
    {
        "id": "6",
        "title": "Nike Dri-FIT Legacy91",
        "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e3c3c76-7f51-47a4-ab9e-8a8616954f5f/casquette-de-golf-dri-fit-legacy91-HV7sVp.png",
        "description": "La casquette Nike Dri-FIT Legacy91 est un modèle confortable et incontournable pour le parcours, avec une fermeture à boucle métallique et un bandeau doux. Ce produit est fabriqué avec au moins 50 % de fibres de polyester recyclé.",
        "price": 17,
        "colors": ["orange", "black", "crimson", "teal"]
        
    }
],
cartNumber:0,
cart:[],
total:0

};

export const ProductReducer = (state=initialState, action) => {
    switch (action.type) {
    case ADD_TO_CART:
        let cart = {
            id:action.payload.id,
            title:action.payload.title,
            src:action.payload.src,
            price:action.payload.price,
            count:action.payload.count

        } 
        state.cart.push(cart); 
    return{
    ...state,
     cartNumber:state.cartNumber+1
    }

    
    default:
        return state;
    }
  };
