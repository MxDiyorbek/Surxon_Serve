<template>
  <footer>
		<div class="container">
			<div class="sep-first">
				<div class="f-list">
					<ul>
						<li>Tovarlar</li>
						<li><router-link to="/">Kompyuter</router-link></li>
						<li><router-link to="/">Printer</router-link></li>
						<li><router-link to="/">Noutbuk</router-link></li>
					</ul>
					<ul>
						<li>Xizmatlar</li>
						<li><router-link to="/">Kompyuter</router-link></li>
						<li><router-link to="/">Printer</router-link></li>
						<li><router-link to="/">Noutbuk</router-link></li>
					</ul>
				</div>
				
				<div class="f-brand">
               <h2>Surxon Servis</h2>
               <ul>
                  <li><a href="#" class="Facebook"><i class="fa-brands fa-square-facebook"></i></a></li>
                  <li><a href="#" class="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#" class="Youtube"><i class="fa-brands fa-youtube"></i></a></li>
                  <li><a href="#" class="Telegram"><i class="fa-brands fa-telegram"></i></a></li>
               </ul>
            </div>

            <div class="f-connect">
               <div>
                <i class="fa-sharp fa-solid fa-phone"></i>
                  <a href="#">+998912345678</a>
               </div>
               <div>
				<i class="fa-sharp fa-solid fa-envelope"></i>
                  <a href="#">SurxonServis@mail.com</a>
               </div>
               <div>
				<i class="fa-sharp fa-solid fa-location-dot"></i>
                  <a href="#">SurxonServis</a>
               </div>
            </div>
			</div>
			<div class="line"></div>
			<div class="sep-second">
			<div class="copy-right">© Surxon Servis - 2022.</div>
			</div>
		</div>
	</footer>
</template>

<script>

export default {
  name: 'TheFooter',
	components: {},
  data () {
		return {
			windowWidth: null,
			flocation: 1,
		}
	},
	created () {
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  },
	methods: {
		updateWidth () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth > 776) {
        this.flocation = 1
        return
      }
      this.flocation = 0
    }
	}
}
</script>

<style lang="scss" scoped>
	footer {
      z-index: 100;
		width: 100%;
		height: 300px;
		background: #242754;
		color: white;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30px;

		.container {
			width: 1200px;
			display: flex;
			flex-direction: column;
			padding: 0 15px;
			box-sizing: content-box;

			.sep-first {
				display: flex;
				justify-content: space-between;
				margin-bottom: 65px;
				align-items: center;
				font-family: 'Poppins';
				.f-logo {
					width: 200px;
					height: 200px;

					@media (max-width: 776px) {
						width: 150px;
						height: 150px;
					}

					@media (max-width: 576px) {
						width: 100px;
						height: 100px;
					}
				}

				.f-list {
					display: flex;

					ul {
						list-style-type: none;
						

						li {
							margin-top: 8px;
							font-weight: 300;
							font-size: 14px;
							font-family: 'Poppins';
                            line-height: 21px;
                            font-style: normal;

							@media (max-width: 576px) {
								font-size: 12px;
							}

							a {
								text-decoration: none;
								color: #fff;
							}
						}

						li:nth-child(1) {
							margin-top: 0px;
							margin-bottom: 25px;
							font-size: 18px;
							font-weight: 700;

							@media (max-width: 576px) {
								font-size: 16px;
							}
						}
					}
					ul:nth-child(1){
							padding-right: 70px;
						}

				}

            .f-brand{
               width: 260px;
               margin-top: 0;
               h2{
				font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 39px;
                  line-height: 46px;
                  text-align: center;
               }
               ul{
               
               height: 50px;
               display: flex;
               justify-content: space-between;
               text-align: center;
               margin-top: 22px;
               
               li{
                  list-style: none;
                  

                  a{
                  i{
                     width: 40px;
                     height: 40px;
					 font-size: 30px;
					 color: #fff;
                  }:hover{
					color: #f57e0e;
					transition: 1s;
				  }
               }
               }
               }
               }

            .f-connect{
               
               div{
				display: flex;
				align-items: center;
				gap: 5px;
				padding-bottom: 5px;
				cursor: pointer;
				i{
					color: #fff;
					font-size: 24px;

				}:hover{
					color: #f57e0e;
					transition: 1s;
				}

                  a{
                   text-decoration: none;
				   color: #fff; 
				   text-align: center;
				   margin-left: 15px;
                  }:hover{
					color: #f57e0e;
					transition: 1s;
				}
               }
               }
            }

			.line{
				width: 100%;
				height: 2px;
				background-color: #fff
			}
			}

			.sep-second {
				display: flex;
				justify-content: center;
				font-family: 'Poppins';
                font-style: normal;
                font-weight: 300;
                font-size: 12px;
                line-height: 14px;
				margin-top: 10px;
			}
		}
	

</style>