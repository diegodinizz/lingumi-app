import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { SearchTags } from './pages/SearchTags'
import { NotFound } from './pages/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/search'>
      <Search />
    </Route>
    <Route exact path='/tags'>
      <SearchTags />
    </Route>
    {/* Catch all unmatched routes */}
    <Route>
      <NotFound />
    </Route>
  </Switch>
)
