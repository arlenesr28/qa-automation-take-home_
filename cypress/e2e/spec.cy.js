/// <reference types="cypress" />
import { beforeEach } from 'mocha';
import {
  navigateSite,
  checkAppRender,
  noEntriesLoaded,
  addNotes,
  deleteNotesAndCheck,
  checkingNotesAdded
} from '../page-objects/helpers'

describe('QA Automation Cypress Test', () => {
  beforeEach(() => {
    navigateSite()
  })

  it('App Render & `notes` state loads with no entries', () => {
    checkAppRender();
    noEntriesLoaded();
  })

  it('Add/Delete Notes', () => {
    addNotes();
    checkingNotesAdded();
    deleteNotesAndCheck();
  })
})