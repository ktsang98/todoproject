import { AppBar } from "../components/appbar"
import { GoogleProvider, GitHubProvider } from "../components/authentication/providers"
import { Title } from "../ui/title"
import { Spacer } from "../ui/spacers"
import {UserLogin} from "../components/authentication/user-login"
import { Legal, HighLight } from "../ui/legal"
import {PageLayout, PageHeader, PageFooter, PageBody} from '../layouts/loginpage'
function index (){
    
    return(
        <>
              <AppBar/>
              <PageLayout>
                    <PageHeader>
                    <Title>Account Login</Title>
                    </PageHeader>
               <PageBody>
                   <GoogleProvider>With Googlae</GoogleProvider>
                   <GitHubProvider>With Github</GitHubProvider>
                   <Spacer className="spacing" >OR</Spacer>
                   <UserLogin/>
                </PageBody>             
                <PageFooter>
                        <Legal>Legal Stuff  <HighLight>terms and conditions</HighLight></Legal>
                </PageFooter>

              </PageLayout>
        </>
    )
}

 

export default index