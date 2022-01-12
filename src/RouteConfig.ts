import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActor from "./actors/IndexActor";

import CreateGenre from "./Genre/CreateGenre";
import EditGenre from "./Genre/EditGenre";
import IndexGenre from "./Genre/IndexGenre";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";

import LandingPage from "./movies/LandingPage";
import CreateMovieTheaters from "./movietheaters/CreateMovieTheaters";
import EditMovieTheaters from "./movietheaters/EditMovieTheaters";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import RedirectToLandingPage from "./Utils/RedirectToLandingPage";

const routes = [
        {path: '/genres',component: IndexGenre, exact:true},
        {path: '/genres/create', component: CreateGenre},
        {path: '/genres/edit/:id(\\d+)', component: EditGenre },
        
        {path: '/actors',component: IndexActor, exact:true},
        {path: '/actors/create', component: CreateActor},
        {path: '/actors/edit/:id(\\d+)', component: EditActor },
        
        {path: '/movietheaters',component: IndexMovieTheaters, exact:true},
        {path: '/movietheaters/create', component: CreateMovieTheaters},
        {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheaters },
        
        {path: '/movies/create', component: CreateMovie},
        {path: '/movies/edit/:id(\\d+)', component: EditMovie },
        {path: '/movies/filter',component: FilterMovies},


        
        {path: '/', component: LandingPage, exact:true},

        {path: '*', component: RedirectToLandingPage}

];

export default routes;