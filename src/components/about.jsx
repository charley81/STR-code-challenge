import styled from 'styled-components'

export default function About() {
  return (
    <Wrapper>
      <h1>Solving the task list challenge</h1>
      <p>
        I decided to solve this coding problem by allowing the user to click a
        checkbox to show the task has been completed. I also provided the user
        with a way to edit and delete a task from their list.
      </p>
      <p>
        I first created an add-task component which consisted of a button and a
        controlled input. I used React’s useReducer and useContext for this
        project. Once the user types in something to add into the input, they
        then click the button which dispatches ‘added’ in return updates the
        state by adding a new task. The task consist of a ID, text, and a done
        property.
      </p>
      <p>
        For the task list I created some dummy data to get started and so that I
        always have something displayed in the task list component. The task
        list component maps over the provided tasks from the useContext hook and
        returns a li for each task. In the li is a task component where I pass
        in the current task.
      </p>
      <p>
        In the task component I created state for while editing a task and
        initially set it to false. I also created a variable to hold the content
        of the task (taskContent) minus the checkbox since each task will always
        show the checkbox. If isEditing is true, then the text will be an input
        to edit the text and the edit button will say save instead of edit. If
        isEditing is set to false then the task will just be text and the edit
        button will of course say edit.
      </p>
      <p>
        In the return of the task list component I returned the checkbox, which
        is where the user will click if the task is complete. After the checkbox
        is the content of the taskContent variable and then a delete button to
        delete a task.
      </p>
      <p>
        When there is a change in the input text field a dispatch ‘changed’ is
        called passing in the action of the current task and the updated text.
        In the reducer I map over the tasks state, find the tasks with a ID that
        matches the passed in ID and return the passed in task. Once the user
        clicks save the isEditing state is set to false.{' '}
      </p>
      <p>
        When the checkbox detects a change (clicked or not), I call the dispatch
        ‘changed’. This time passing in the current task and done property =
        e.target.checked, which will update the done property to true of false
        depending on whether the checkbox is checked or not.{' '}
      </p>
      Finally when the user clicks the delete button a dispatch of ‘deleted’ is
      called passing in the task ID. In the reducer I filter over the tasks
      state and return all the tasks except the one that has the ID of the ID
      passed in the action
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: var(--maxWidthMed);
  margin: 2rem auto 0;
  padding: 1rem;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    padding-bottom: 1rem;
  }
`
