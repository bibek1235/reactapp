import React from 'react';

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: this.props.rating
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState((prev) => ({
            rating: !prev.rating
        }))
    }

    render() {
        let ratetext;
        let btntxt;
        if (this.state.rating) {
            ratetext = 5;
            btntxt = 'Unrate';
        } else {
            ratetext = 0;
            btntxt = 'Rate 5 Star';
        }
        return (
            <div className="col-md-3">
                <div className="each-items">
                    <img className="img-fluid rounded" src={this.props.img} />
                    <h5>Name: {this.props.name}</h5>
                    <h5>Rating: {ratetext}</h5>
                    <button onClick={this.handleClick} className="btn btn-primary">{btntxt}</button>
                    {console.log(this.state.rating)}
                </div>
            </div>
        )
    }
}

export default ProductList;