# ALA-App

Working build complete with all views:

- Daily
  - Details
- Calendar
- Summary
- ResidentInfo
- Settings

## Todos - categorized

**Views**

- [ ] Update <CalendarView/> with new data structure to include subtasks, shifts and task notes.
- [ ] Update <SummaryView/> with new data structure to include subtasks, shifts and task notes.
- [ ] IF TIME PERMITS: Add base structure of <ResidentInfo/> and <Settings/> view.

**Components**

- [ ] Rework <CreateTaskForm/> & <UpdateTaskForm/> to better handle shifts, subtasks and task notes.

- [ ] <Counter/> needs to be fixed to handle min/max, onChange/manual entry and more features.

**User Flows**

- [ ] Task Updates

  - Create immediate update of user data "prior" to POST request.
  - Apply this user flow inside of the <DetailsView/>

- [ ] Create "ADD NOTE" flow for tasks and subtasks.

  - Might need some helpers for finding the matching task record whose note record needs updating.

- [ ] REQUIRES MED CHECK:
  - if selected mark as "NOT-COMPLETE" and require a "follow-up date"

**Styles**

- [ ] Fix <DashboardNav/>
  - Add "back arrow" to upper left, next to <Sidebar/> and make it larger!
