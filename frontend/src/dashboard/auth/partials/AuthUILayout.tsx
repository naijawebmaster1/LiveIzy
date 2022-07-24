import { Carousel } from "./AuthCarousel";
function AuthUILayout({ children }: any) {
  return (
    <div className="App">
      <section className="">
        <div className="lg:grid grid-cols-8 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden ">
          <div className="lg:col-span-3 md:pt-10 pt-20 bg-gray-900 hidden md:block  text-center px-6 gradient-bg">
            <Carousel />
          </div>
          <div className="lg:col-span-5 pt-10  text-center overflow-hidden h-screen lg:px-20 m-auto md:px-10 px-6">
            {children}
          </div>
        </div>
      </section>
    </div>
  )
}
export default AuthUILayout