
import { Outlet, Navigate } from 'react-router-dom'
import '../_auth/form/form.css';
import sideimg from '/assets/images/side-img.svg'
export const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (<Navigate to='/' />)
        : (
          <>
            <section className='main_auth '>
              <div className='screen_size'>
                <div className='auth_form'>
                  <div className='col-6 w-[50%] '>
                    <div className='container'>
                      <Outlet />
                    </div>

                  </div>

                  <div className='col-6 w-[50%] h-[100vh] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${sideimg})` }}>
                    {/* <img src="/assets/images/side-img.svg" alt="" /> */}
                  </div>

                </div>
              </div>


            </section>

          </>
        )}
    </>
  )
}
