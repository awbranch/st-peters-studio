import settings from './settings';
import header from './header';
import footer from './footer';
import page from './page';
import block from './pageBlock';
import components from './components';
import componentSet from './componentSet';

import action from './action';
import bookmark from './bookmark';
import button from './button';
import buttonTile from './buttonTile';
import callToActionListItem from './callToActionListItem';
import contactFormSubject from './contactFormSubject';
import documentListItem from './documentListItem';
import faq from './faq';
import iconListItem from './iconListItem';
import imageGalleryItem from './imageGalleryItem';
import imageTile from './imageTile';
import impact from './impact';
import job from './job';
import link from './link';
import listSetList from './listSetList';
import logoGridItem from './logoGridItem';
import lunchMenu from './lunchMenu';
import menuItem from './menuItem';
import newsCategory from './newsCategory';
import newsStory from './newsStory';
import redirect from './redirect';
import social from './social';
import teamGridMember from './teamGridMember';
import teamListMember from './teamListMember';

export const schemaTypes = [
  settings,
  header,
  footer,
  page,
  block,
  ...components,
  action,
  bookmark,
  button,
  buttonTile,
  callToActionListItem,
  componentSet,
  contactFormSubject,
  documentListItem,
  faq,
  iconListItem,
  imageGalleryItem,
  imageTile,
  impact,
  job,
  link,
  listSetList,
  logoGridItem,
  lunchMenu,
  menuItem,
  newsCategory,
  newsStory,
  redirect,
  social,
  teamGridMember,
  teamListMember,
];
