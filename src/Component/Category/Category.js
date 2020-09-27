import React, { Component } from 'react';
import './Category.css';

export class Category extends Component {
  state={
    CategoryList:JSON.parse(localStorage.getItem("accountdata")).productsPage.categories
  }

// deleteCategory = (index) => {

// }

deleteCategory = (pos) => {
  let restCategoryData=this.state.CategoryList.filter((item,index)=>{
  return pos!==index;
  });

 let updateArr=JSON.parse(localStorage.getItem("accountdata"));

updateArr.productsPage.categories= restCategoryData;
localStorage.setItem("accountdata",JSON.stringify(updateArr));
this.setState({ CategoryList: restCategoryData});

}

    render() {
console.log(this.state.CategoryList);
const mapCategoryList = this.state.CategoryList.map((category,index)=>{
 return (  <tr>
  <td class="tm-product-name">{category.item}</td>
  <td class="text-center">
    <a href="#" class="tm-product-delete-link">
      <i onClick={()=>{this.deleteCategory(index)}} class="far fa-trash-alt tm-product-delete-icon"></i>
    </a>
  </td>
</tr>)
})
        return (
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
            <div class="tm-bg-primary-dark tm-block tm-block-product-categories">
              <h2 class="tm-block-title">Product Categories</h2>
              <div class="tm-product-table-container">
                <table class="table tm-table-small tm-product-table">
                  <tbody>
                  {mapCategoryList}
                  </tbody>
                </table>
              </div>
              {/* <!-- table container --> */}
              <button class="btn btn-primary btn-block text-uppercase mb-3">
                Add new category
              </button>
            </div>
          </div>
        )
    }
}

export default Category
