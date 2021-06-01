import './App.css'
import ajax from './api/ajax'
import {useEffect,useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Writers from './components/Writers'
import Layout from './components//Layout'
import Error from './components/Error'

function App() {
  const [writers,setWriters] = useState([])
  const onload=(writers)=>{
    setWriters(writers)
  }

  useEffect(()=>{
    ajax('https://mock.mengxuegu.com/mock/5ff00a945b350029c77c9f72/writers/writerinfo').then((res)=>{
      if(res.flag){
        onload(res.writers)
      } else {
        return false
      }
    })
  },[])

  return (
      <BrowserRouter>
        <Layout writers={writers}>
            <Switch>
              <Route path='/' exact render={()=><div>home</div>}/>
              <Route path='/writers' render={(props)=><Writers {...props} writers={writers}/>}/>
              <Route component={Error} />
            </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
