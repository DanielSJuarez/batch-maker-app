function StepDetail() {

    return (
        <div>
            <p>{step_name}</p>
            <p>{amount_measure} {measure} {ingredient}</p>
            <p>{directions}</p>
        </div>
    )

}

export default StepDetail