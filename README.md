# ALA-App

Working build complete with all views:

- Daily
  - Details
- Calendar
- Summary
- ResidentInfo
- Settings

## Current Work

- [x] Handle task updates: scheduled & unscheduled
  - [x] Formulate the new state object for task updates
- [ ] Write subtask CRUD functions: CREATE, UPDATE, DELETE (READ is already handled)
  - [ ] Handle notes, and subtask creation
  - [ ] Handle updates for subtasks and notes
- [ ] Add "Points" per task for <TaskDetails/> for the <EditTaskForm/>
- [ ] Allow loading different resident on <DetailsView/>

## Todos - categorized

**Components**

- [ ] Rework <CreateTaskForm/> & <UpdateTaskForm/> to better handle shifts, subtasks and task notes.

- [x] <Counter/> needs to be fixed to handle min/max, onChange/manual entry and more features.
  - Created `useCounter` custom hook w/ an updated version of the <Counter/> component.

**User Flows**

- [ ] Task Updates

  - Create immediate update of user data "prior" to POST request.
  - Apply this user flow inside of the <DetailsView/>
  - When user clicks "SAVE CHANGES" in the "task list" section the follow occurs:
    - 1. A <Modal/> pops up asking them if they'd like to add notes, or edit the task or tasks they are planning on changing.
    - 2. If they click "NO" then the task(s) are submitted with the defaults.
    - 3. If they click "EDIT/UPDATE" it'll show them the <Modal> with their task's details so they can make changes easily.

- [ ] Task Updates (2) cont...
  - When a user clicks on a task there's two options:
    - 1. Open the <UpdateTaskForm> modal
    - 2. Immediately/optimistically update the task as completed

* [ ] Create "ADD NOTE" flow for tasks and subtasks.

  - Might need some helpers for finding the matching task record whose note record needs updating.

* [x] REQUIRES MED CHECK:
  - if selected mark as "NOT-COMPLETE" and require a "follow-up date"

**Styles**

- [ ] Fix <DashboardNav/>
  - Add "back arrow" to upper left, next to <Sidebar/> and make it larger!

---

## v2 Features

- [ ] Enable quick ADL Category change from the <DetailsView/>
  - Consider having an ADL Category Dropdown menu to switch categories.

---

## Application Structure

```
                                    <App/>
                                   /      \
            <NonAuthenticatedView/>        <AuthenticatedView/>
          /                                                     \
    <LoginPage/>                                             <DashboardContainer/>
   /                                                         /                    \
<LoginForm/>                                           <Dashboard/>               <Sidebar/>
                                                          ||
                                                        Views

```
