import React from "react";

import "./login.scss";
import * as Components from './Components';

const Login = () => {
  const [signIn, toggle] = React.useState(true);

  
  return (
    <Components.Container>


              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>ĐĂNG NHẬP</Components.Title>
                       <Components.Input type='email' placeholder='Tên đăng nhập' />
                       <Components.Input type='password' placeholder='Mật khẩu' />
                       <Components.Anchor>Quên mật khẩu vui lòng liên hệ admin</Components.Anchor>
                       <Components.Button>Đăng nhập</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Chào mừng</Components.Title>
                        <Components.Paragraph>
                            Đăng nhập để sử dụng dịch vụ
                        </Components.Paragraph>
    
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
  )
}

export default Login