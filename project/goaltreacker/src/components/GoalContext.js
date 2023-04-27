

import axios from 'axios'

import { createContext } from "react";
import { useEffect,useState } from "react";

axios.defaults.baseURL = 'http://localhost:4000'

export const GoalContext= createContext();

const GoalContextProvider= (props)=>{

    const [goals, setGoals] = useState([]);
    const [goalId, setGoalId]= useState("")
    const [searchInput, setSearchInput] = useState("")


   function fetchGoals(){
      axios.get('/allgoals')
      .then((res)=> setGoals(res.data)).catch((e)=>console.log(e.message))
    }
    useEffect(()=>{
      fetchGoals()
    },[]);

    const addGoal= async(...goals)=>{
      const response = await axios.post('/addGoal', goals )
      setGoalId(response.data);

    }

    const addStep = async(id, newGoal)=>{
      const response = await axios.post('/addGoal', goals )
      setGoals(response)

    }


    const deleteGoal = (id) => {
        axios.delete(`/delete/${id}`)
          .then((res) => {
            setGoals(goals.filter(goal => goal._id !== id))
          })
          .catch((e) => console.log(e.message))
      }


      const updateGoal=(id, updatedGoal)=>{
      
        axios.patch(`/updategoal/${id}`,updatedGoal)
        .then((res) => {
          fetchGoals()
        })
        .catch((e) => console.log(e.message))
      }

      const updateStep=(goalId,stepId, updatedStep)=>{
        axios.put(`/updatestep/${goalId}/${stepId}` , {status:updatedStep})
        .then((res) => {
          fetchGoals()
    
        })
        .catch((e) => console.log(e.message))
      }

      const search = (e)=>{
        if(e.target.value.length > 0){
          const filter =  goals.filter(goal=>goal.title.includes(searchInput))
       setGoals(filter)
        }else if(e.target.value.length === 0){
          fetchGoals()
        }
        
        
      }


      
    return(
      <GoalContext.Provider value={{ goals, addGoal, addStep, deleteGoal, updateGoal, updateStep, search, setSearchInput, fetchGoals }}>
            {props.children}
        </GoalContext.Provider>
    )
}

export default GoalContextProvider;