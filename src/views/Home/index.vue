<template>
    <div>
        <!-- Start: Header 
        =============================== -->
        <header>
            <div class="top-header">FREE SHIPPING ON ALL ORDERS OVER $75</div>
            
            <nav>
                <div class="nav">
                    
                    <input type="checkbox" id="nav-check" class="d-none">
                    <div class="nav-btn d-sm-block p-15">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div class="nav-header p-sm-15">
                        <div class="nav-title">
                            <img src="images/Logo.png" class="d-sm-block" alt="Logo" width="80">   
                        </div>
                    </div>
                    <div class="d-sm-block p-15">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    
                    
                    <div class="nav-links">
                        <img src="images/Logo.png" class="d-sm-none mr-15" alt="Logo" width="80">  
                        <a href="">Womens</a>
                        <a href="">Mens</a>
                        <a href="">Accessories</a>
                        <a href="">Sales!</a>
                    </div>
                </div>
            </nav>
        </header>
        <!-- End: Header 
        =============================== -->

        <!-- Start: Main
        =============================== -->
        <main>

            <div class="banner">
                <splide :options="options">
                    <splide-slide>
                        <img src="images/Hero Image 1.jpg">
                    </splide-slide>
                    <splide-slide>
                        <img src="images/Hero Image 1.jpg">
                    </splide-slide>
                    <splide-slide>
                        <img src="images/Hero Image 1.jpg">
                    </splide-slide>
                    <splide-slide>
                        <img src="images/Hero Image 1.jpg">
                    </splide-slide>
                </splide>
                <div class="herocontent">
                    <p class="title">Title Goes Here</p>
                    <p class="tagline">Tagline will go right here.</p>
                    <button class="btn-dark">SHOP NOW</button>
                </div>
               
            </div>

            <div class="p-15 bg-white">
                <div class="category-wrapper">
                    <div class="category-1">
                        <img src="images/Womens Image.jpg">
                        <div class="imagetitle">Womens</div>
                    </div>
                    <div  class="category-2">
                        <img src="images/Mens Image.jpg">
                        <div class="imagetitle">Mens</div>
                    </div>
                    <div  class="category-3">
                        <img src="images/Accessories Image.jpg">
                        <div class="imagetitle">Acessories</div>
                    </div>
                </div>
            </div>

            <div class="p-15 bg-white">
                 <h5 class="header">New Arrivals</h5>
                <div class="arrivals-wrapper">
                    <splide :options="options">
                        <splide-slide>
                            <div class="products">
                                <div>
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                                <div class="d-sm-none">
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                                <div class="d-sm-none">
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                                
                            </div>
                        </splide-slide>
                        <splide-slide>
                        <div class="products">
                                <div>
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                                <div class="d-sm-none">
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                                <div class="d-sm-none">
                                    <img src="images/Product Image 1.jpg" width="230">
                                    <div>
                                        <p class="slidercontenttitle">Product Title</p>
                                        <p class="slidercontentproduct">Women's T-Shirt</p>
                                        <p class="slidercontentprice">$19.99</p>
                                    </div>
                                </div>
                               
                            </div>
                        </splide-slide>
                       
                    </splide>
                </div>
            </div>

            <div class="banner bannerbottom">
                <img src="images/Hero Image 2.jpg" alt="Hero Image">
                <div class="content">
                    <p class="title">Title Goes Here</p>
                    <p class="tagline">Tagline will go right here.</p>
                    <button class="btn-green">SHOP NOW</button>
                </div>
            </div>

            <div class="follow-us-wrapper">
                <h5>Follow us on Instagram!</h5>
                 <div class="img-wrapper">
                    <img src="images/Social 1.jpg" alt="Follow US">
                    <img src="images/Social 2.jpg" alt="Follow US">
                    <img src="images/Social 3.jpg" alt="Follow US">
                    <img src="images/Social 4.jpg" alt="Follow US" class="d-sm-none">
                    <img src="images/Social 5.jpg" alt="Follow US" class="d-sm-none">
                </div>
            </div>
           

            <div class="signup-wrapper">
                <div class="header">
                    <div><img src="images/Email Icon.png" width="30"  class="mr-15 "></div> <div>Sign up & Stay Connected</div>
                </div>
                <div class="content">
                    <div class="para mr-15 pb-md-15">
                        <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
                    </div>
                    <div class="form">
                        <input type="text" name="email" placeholder="Your Email Address" class="mr-15"><button class="btn btn-subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
            

        </main>
        <!--End: Main 
        =============================== -->

        <!-- Start: Footer
        =============================== -->
        <footer>
            <div class="footer bg-dark">
                <div class="column column-1"> 
                    <button class="icon-wrapper" v-on:click='isOpenService = !isOpenService'><span v-show="!isOpenService"><i class="fas fa-plus"></i></span><span v-show="isOpenService" class="minus"><i class="fas fa-minus"></i></span></button>
                
                    <h5>Customer Service</h5>
                    <div v-show="isOpenService">
                        <p>Accessibility</p>
                        <p>Contact Us</p>
                        <p>Return Policy</p>
                        <p>FAQ</p>
                        <p>Gift Certificates</p>
                        <p>Wishlist</p>
                    </div>
                </div>
                <div class="column column-2">
                    <button class="icon-wrapper" v-on:click='isOpenCompany = !isOpenCompany'><span v-show="!isOpenCompany"><i class="fas fa-plus"></i></span><span v-show="isOpenCompany" class="minus"><i class="fas fa-minus"></i></span></button>
                    <h5>Company</h5>
                    <div v-show="isOpenCompany">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Affiliates</p>
                    </div>
                </div>
                <div class="column column-3">
                    <h5>Follow Us</h5>
                    <img src="images/Group 3.png" width="10" alt="Facebook" title="Facebook" class="facebook">
                    <img src="images/Group 8.png" width="20" alt="Instagram" title="Instagram" class="insta ml-15">
                    <img src="images/Group 15.png" width="20" alt="Twitter" title="Twitter" class="insta ml-15">
                </div>
            </div>
        </footer>
        <!-- End: Footer
        =============================== -->
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    name: 'Home',
    data() {
        return {
           isOpenService: true,
           isOpenCompany: true,
          
        }
        
    },
    components: {
       Splide,
        SplideSlide,
    },
    methods: {
        
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/app.scss";

    .bg-dark {
        background: $dark;
    }
    .bg-white {
        background: #fff;
    }
    .ml-15 {
        margin-left: 15px;
    }
    .mr-15 {
        margin-right: 15px;
    }
    .p-15 {
        padding: 15px;
    }
    .pb-md-15 {
        @include media-min-sm-max-lg {
            padding-bottom: 15px;
        }
    }
    .d-none {
        display: none;
    }
    .d-sm-none {
        @include media-max-sm {
            display: none;
        }
    }
    .p-sm-15 {
        @include media-max-sm {
             padding: 15px;
        }
    }
    .btn-green {
        background-color:$green;
        color: white;
        @include print-styles($font-regular);
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        border: 0;
        @include media-max-sm {
            font-size: 13px;
                padding: 8px 10px;

        }
    }
    .btn-dark {
        background-color: $dark;
        @extend .btn-green;
    }
    h5 {
        font-family: 'Pacifico', cursive;
        font-size: 35px;
        color: #000000;
        letter-spacing: 0;
        text-align: center;
        @include media-max-sm {
            margin: 0 0 20px 0;
            font-size: 22px;
        }
        @include media-min-sm-max-lg {
            margin: 0 0 20px 0;
           
        }
    }
  
    .d-sm-block {
        display: none;
        @include media-max-sm {
            display: block;
        }
    }
    .splide__pagination {
        li {
            margin: 0 5px;
        }
    }
    .splide__pagination__page {
        width: 15px;
        height: 15px;
        border-radius: 0;
        @include media-max-sm {
             width: 8px;
             height:  8px;
        }
    }
    .splide__arrow--next {
        right: 0em;
        background: none;
        color: red;
    }
    .splide__arrow--prev {
        left: 0;
        background: none;
    }
    .splide__arrow svg {
        fill: $green;
    }
    .splide__pagination__page.is-active {
        transform: none;
    }
    /* HEADER */
    header {
        nav {
            background-color: $green;
        }
        .top-header {
                background-color: $dark;
                @include print-styles($font-regular);
                color: white;
                text-align: center;
                padding: 15px; 
                font-size: 16px;
            }

            .nav {
                width: 100%;
                position: relative;
                @include media-max-sm {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .fa-shopping-cart {
                    color: #fff;
                    font-size: 20px;
                }
                .nav-links {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 28px;
                    padding: 0 10px;
                    z-index: -1;
                    @include print-styles($font-regular);
                    @include media-max-sm {
                        position: absolute;
                        display: block;
                        width: 100%;
                        background-color: $green;
                        height: 0px;
                        transition: all 0.3s ease-in;
                        top: 80px;
                        left: 0px;
                        overflow-x: hidden;
                    }
                    a {
                        padding: 20px;
                        color: #fff;
                        text-decoration: none;
                    }
                }
                @include media-max-sm {
                    .nav-btn > label > span {
                        display: block;
                        width: 25px;
                        height: 7px;
                        border-top: 2px solid #eee;
                        cursor: pointer;
                    }
                    
                }
            }
            @include media-max-sm {
            
                .nav > .nav-links > a {
                    display: block;
                    width: 100%;
                }
                .nav > #nav-check:not(:checked) ~ .nav-links {
                    height: 0px;
                }
                .nav > #nav-check:checked ~ .nav-links {
                    height: calc(100vh - 50px);
                    z-index: 999;

                }
            }
    }
    
  
    /* BANNER */
    .banner {
        position: relative;
        color: white;
        img {
            width: 100%;
        }
        .splide__arrow--next, .splide__arrow--prev {
            display: none;
        }
        .herocontent {
            position: absolute;
            top: 45%;
            left: 10%;
            transform: translate(0, -50%);
            text-align: left;
        }
        .title{
            font-family: 'Pacifico', cursive;
            font-size: 50px;
            margin: 0 auto;
            @include media-max-sm {
                font-size: 22px;
            }
        }

        .tagline{
            @include print-styles($font-regular);
            font-size: 45px;
            margin-top: 0;
            @include media-max-sm {
                font-size: 15px;
            }
        }

        
        &.bannerbottom {
            .content {
                position: absolute;
                top: 45%;
                right: 10%;
                transform: translate(0, -50%);
                text-align: left;
            }
        }
    }
    
    /* CATEGORY */
    .category-wrapper {
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-wrap: wrap;
         @include media-max-sm {
            justify-content: space-between;
        }
        
        .imagetitle{
            background-color: $green;
            font-family: 'Pacifico', cursive;
            font-size: 50px;
            letter-spacing: 0;
            text-align: center;
            color: #fff;
            margin-top: -6px;
            @include media-max-md {
               font-size: 15px;
            }
            @include media-min-md-max-lg {
                font-size: 22px;
            }
            @include media-min-lg-max-xl {
                 font-size: 22px;
            }
            
        }
        img {
            width: 360px;
            @include media-min-lg-max-xl {
                 width: 300px;
            }
            @include media-max-md {
                width: 100%;
            }
             @include media-min-sm-max-md {
                width: 170px;
            }
            @include media-min-md-max-lg {
                width: 230px;
            }
        }
        .category-1, .category-2 {
            @include media-max-sm {
                width: 48%;
            }
            
        }
        
        .category-3 {
            @include media-max-sm {
                flex: 1;
            }
            @include media-max-sm {
                width: 48%;
                margin-top: 20px;
            }
        }
    }

    /* NEW ARRIVALS */
    .arrivals-wrapper {
        .products {
            display: flex;
            justify-content: space-around;
            padding: 20px;
            img {
                @include media-max-lg {
                    width: 110px !important;
                }
            }
        }
        .splide__pagination__page {
            display: none;
        }
        .slidercontenttitle{
             @include print-styles($font-medium);
            font-size: 18px;
            color: #000000;
            letter-spacing: 0;
            text-align: center;
            margin-bottom: 10px;
            @include media-max-sm {
                font-size: 15px;
            }
        }

        .slidercontentproduct{
             @include print-styles($font-regular);
            font-size: 18px;
            color: #000000;
            letter-spacing: 0;
            text-align: center;
            margin-bottom: 10px;
            margin-top: 10px;
             @include media-max-sm {
                font-size: 13px;
            }
        }

        .slidercontentprice{
            font-family: 'Pacifico', cursive;
            font-size: 18px;
            color:$green;
            letter-spacing: 0;
            text-align: center;
            font-style: italic;
             @include media-max-sm {
                font-size: 13px;
            }
        }
    }
    /* Follow Us */

    .follow-us-wrapper {
        padding: 15px;
        .img-wrapper{
            display: flex;
            justify-content: space-around;
            img{
                margin: 20px;
                width: 15%;
                @include media-max-sm {
                    margin: 10px;
                    width: 25%;
                }
                @include media-min-sm-max-lg {
                    margin: 5px;
 
                }
            }
        }
    }

    /* Signup */

   .signup-wrapper {
        background: $green;
        padding: 15px;
        .header {
            font-family: 'Pacifico', cursive;
            color: #fff;
            font-size: 35px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 10px;
            @include media-max-sm {
                display: block;
                font-size: 22px;
            }
    
        }
        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 70%;
            margin: 20px auto;
             @include media-max-sm {
                width: 100%;
            }
            p{
                color: #fff;
                font-size: 20px;
                text-align: left;
                @include print-styles($font-regular);
                margin: 0;
                @include media-max-xl{
                    text-align: center;
                    font-size: 17px;
                }
            }
            
        }
        .para {
            width: 50%;
             @include media-max-xl {
                width: 100%;
                margin-bottom: 20px;
            }
        }
        .form {
            text-align: left;
            width: 48%;
            @include media-max-xl{
                width: 100%;
                text-align: center;
            }
 
 
 
        }
        input {
            padding: 8px 20px;
             @include print-styles($font-regular);
             font-size: 16px;
             width: 200px;
            &::placeholder {
                color: #333333;
            }
            @include media-max-sm {
                 padding: 8px 10px;
                 width: unset;
            }
        }
        button {
            font-size: 20px;
            background: transparent;
            border: 3px solid #fff;
            font-family: 'Pacifico', cursive;
            color: #fff;
            border-radius: 0;
            padding: 0px 30px;
            @include media-max-sm {
                 font-size: 15px;
                 padding: 3px 30px;
            }
            &:focus {
                color: #fff;
            }
        }
    }

    /* Footer */

    .footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding: 20px 0;
        .column {
            text-align: left;
            padding: 0px 20px;
            @include media-max-sm {
                width: 100%;
                flex-basis: unset !important;
            }
        } 
        .column-1 {
            position: relative;
        }
        .column-2 {
            flex: 1;
            position: relative;
        }
         
         .icon-wrapper {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #fff;
            font-size: 11px;
            background: none;
            border: none;
            cursor: pointer;
            &:focus {
                outline: 0;
            }
            .minus{
                display: none;
                @include media-max-sm {
                    display: block;
                }
            }
         }

        h5 {
            color: #fff;
            margin: 10px 0;
            font-family: 'Pacifico', cursive;
            font-style: italic;
            font-size: 16px;
            text-align: left;
        }
        p {
            color: #fff;
            font-size: 14px;
            margin-bottom: 10px;
            @include print-styles($font-regular);
            letter-spacing: 0.03rem;
        }
        
    }


</style>

