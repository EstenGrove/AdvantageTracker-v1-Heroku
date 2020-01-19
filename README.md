# ALA-App

Working build complete with all views:

- Daily
  - Details
- Calendar
- Summary
- ResidentInfo
- Settings

## Current Work

- [ ] Handle task updates: scheduled & unscheduled
  - [ ] Formulate the new state object for task updates
- [ ] Handle notes, and subtask creation
- [ ] Handle updates for subtasks and notes

## Todos - categorized

**Views**

- [ ] Update <CalendarView/> with new data structure to include subtasks, shifts and task notes.
- [ ] Update <SummaryView/> with new data structure to include subtasks, shifts and task notes.
- [ ] IF TIME PERMITS: Add base structure of <ResidentInfo/> and <Settings/> view.

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
