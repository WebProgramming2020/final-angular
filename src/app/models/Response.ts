//instead of modelling based on my JSON response, I modelled only based on the values I needed
export interface IRates {
    rates:{
        USD:number,
        AUD:number,
        CAD:number,
        PLN:number,
        MXN:number
    }
}