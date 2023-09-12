import React, {useEffect} from 'react'
import AfficheArticles from './AfficheArticles'
import { useDispatch } from 'react-redux'
import { getArticles } from '../../features/articleSlice'
const Listarticles = () => {
  
      const dispatch = useDispatch();
useEffect(() => {
dispatch(getArticles());
},[dispatch]);
return (
<div>
<AfficheArticles/>
</div>
)

  
  
}

export default Listarticles
