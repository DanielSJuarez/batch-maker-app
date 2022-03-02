import {useState, useEffect} from 'react'
import StepDetail from './StepDetail';
import StepForm from './StepForm';

function StepList({calculate}) {
    const [steps, setSteps] = useState(null)
    const [addStep, setAddStep] = useState(false)

    const handleError = (err) => {
        console.log(err);
      }

    useEffect(() => {
        const getRecipeSteps = async () => {
            const response = await fetch('/api/v1/recipes/1/step/').catch(handleError);

            if (!response.ok) {
                throw new Error('Netword response was not OK!')
            } else {
                const data = await response.json();
                setSteps(data);
            }
        }
        getRecipeSteps();
    }, []);

    if (!steps) {
        return <div>Fetching data....</div>
    }

    const stepList = steps.map(step => (
        <StepDetail key={step.id} {...step} calculate={calculate} /> 
    ))

    const newStepButton = (
        <button type='button' onClick={()=> setAddStep(true)} >Add Step</button>
    )

    return (
        <div>
            {stepList}
            {addStep ? <StepForm setAddStep={setAddStep}/> : newStepButton}
        </div>
    )

}

export default StepList