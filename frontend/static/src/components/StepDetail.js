import Cookies, { attributes } from 'js-cookie';
function StepDetail({step_name, amount_measure, measure, ingredient, directions, calculate, id, steps, setSteps}) {

    const handleError = (err) => {
        console.log(err);
      }


    const deleteStep = async (id) => {
    
        const options = {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
          },
        }
    
        const response = await fetch(`/api/v1/recipes/1/step/${id}/`, options).catch(handleError);
    
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        
        const viewAfterDelete = steps.filter((step) => {
            return step.id !== id
        });
        setSteps(viewAfterDelete)
      }

    return (
        <div>
            <p>{step_name}</p>
            <p>{amount_measure * calculate} {measure} {ingredient}</p>
            <p>{directions}</p>
            <button type="button" onClick={deleteStep}>-</button>
        </div>
    )

}

export default StepDetail