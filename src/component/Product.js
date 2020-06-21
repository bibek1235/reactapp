import React from 'react';

import ProductList from './ProductList';

import dataContent from './Data';

import country from './country';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            searchtxt: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        this.setState({
            searchtxt: event.target.value
        })
    }
    componentDidMount() {
        document.getElementById('search-field').focus();
    }

    render() {
        // console.log(countrynew[0].name)


        var filtern = country.filter(
            (sitem) => {
                return sitem.name.toLowerCase().indexOf(this.state.searchtxt.toLowerCase()) !== -1;
            }
        )
        var filternew = dataContent.filter(
            (sitemnew) => {
                return sitemnew.Name.toLowerCase().indexOf(this.state.searchtxt.toLowerCase()) !== -1
            }
        )

        var newtest = filtern.map(newitem => (<h5 style={{ width: "100%" }}> {newitem.name}</h5 >))



        var user = filternew.map(item => (<ProductList key={item.id} img={item.Img} name={item.Name} rating={item.Rating} />))
        return (
            <div className="container"><br />
                <input type="text" onKeyUp={this.handleSearch} id="search-field" className="form-control" placeholder="Search Items" /><br /><br />
                <div className="row">
                    {user.length > 0 ? user : 'No Result.'}
                    {/* {newtest} */}
                </div>
            </div>
        )
    }
}

export default Product;