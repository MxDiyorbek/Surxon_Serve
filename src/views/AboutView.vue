<template>
    <section class="about">
      <div class="container">
          <div class="left">
              <img src="../assets/images/komp.jpg" alt="">
          </div>
          <div class="right">
              <h1 class="b-text">
                  Surxon Servis
              </h1>
              <p class="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique in facere? Laborum dolorem cupiditate vero inventore perspiciatis quas unde qui, eligendi vel quo quisquam numquam iste facere quod aperiam laudantium quis consectetur illum soluta provident? Vitae nulla consequatur reprehenderit mollitia molestiae adipisci accusamus provident ab, quam cumque ea deleniti dolorum, eaque explicabo officia minima illo maiores, iure quasi nostrum at sit molestias modi asperiores. Fuga, est necessitatibus? Nemo sit provident et quia veritatis cumque iusto adipisci ut, accusantium commodi nam repellat laborum ducimus nesciunt modi eaque non explicabo sed ipsam sint illo eius vitae harum. Sit ad, neque consequatur ea impedit maiores enim voluptate animi in quas tempora inventore fuga itaque dolores. Explicabo soluta aperiam dolore quisquam quas repellat quo vel asperiores!
              </p>
              <div class="bottom">
                  <div class="b-left">

                      <div> 
                          <h3>Joylashuv</h3>
                          <i class="fa-sharp fa-solid fa-location-dot"></i>
                          <a href="https://goo.gl/maps/ta6SWTgJdZd7ZScn8">Surxon Servis</a>
                     </div>

                 <div class="btn">
                  <router-link :to="{name:'home'}">
                      <button >Orqaga</button>
                  </router-link>
                 </div>
                 
                  </div>
                  <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803541.2205179895!2d66.3038363426261!3d38.120821921231666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5110fcbfa23c3%3A0xb095bebbc47ce718!2z0KHRg9GA0YXQsNC90LTQsNGA0YzRjywg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1666544856582!5m2!1sru!2s" width="450" height="300" ></iframe>
                      </div>
              </div>
          </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss">
  .about{
      max-width: 19000;
      width: 100%;

      .container{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 80px;
          margin-left: 100px;
          margin-right: 100px;
      
          .left{
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
             
              img{
                  width: 700px; 
                  border-radius: 10px;
                  
              }
          }
      
          .right{
            margin-right: 100px;
              .b-text{
                  margin-top: 80px;
                  margin-bottom: 30px;
                  line-height: 54px;
                  font-size: 36px;
                  text-align: left;
                  color:#242754;
                  font-family: 'Poppins';
                  font-weight: 500;
              }

              .title{
                  font-size: 24px;
                  text-align: left;
                  color:#6c6c6c;
                  font-family: 'Poppins';
                  font-weight: 400;
                  font-size: 18px;
                  line-height: 24px;
                  margin-bottom: 25px;
              }

              .bottom{
                  display: flex;
                  justify-content: space-between;
                  
                  .b-left{
  
                      h3{
                          font-family: 'Poppins';
                          font-weight: 500;
                          margin-top: 40px;
                          line-height: 27px;
                          font-size: 20px;
                          margin-bottom: 10px;
                          color: #242754;
                          opacity: 0.9;
                      }
  
                      i{
                          font-size: 18px;
                          margin-right:14px ;
                      }
                      
                      a{
                          text-decoration: none;
                          font-size: 18px;
                          line-height: 27px;
                          font-family: 'Poppins';
                          font-weight: 400;
                      }

                      :hover{
                          color: #f57e0e;
                      }

                      .btn{
                          a{
                              text-decoration: none;
                             
                      button{
                          margin-top: 95px;
                          width: 160px;
                          height: 50px;
                          font-size: 20px;
                          line-height: 30px;
                          font-family: 'Poppins';
                          font-weight: 500;
                          border: none;
                          border-radius: 10px;
                          color: #fff;
                          background: #242754;
                          opacity: 0.9;
                         }
                         
                         :hover{
                          border: 1px solid #242754;
                          background: #fff;
                          color: #242754;
                          transition: 1s;
                          cursor: pointer;
                         }
                          }
                      }
                  }
  
                 .map{
                  width: 350px;
                  margin-right: 100px;
                  margin-bottom: 80px;
                  iframe{
                  border: none;
                  border-radius: 10px;
                  height: 250px;
                  }
                  }
              }
          }
      }
  }
  </style>