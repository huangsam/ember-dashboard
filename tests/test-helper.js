import Application from 'ember-dashboard/app';
import config from 'ember-dashboard/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
