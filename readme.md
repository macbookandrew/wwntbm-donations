# Introduction

Basic [Tithe.ly](https://tithe.ly) integration

# Usage

The `[tithely_donations_list]` shortcode will list all active missionaries plus a “General Fund” item for use on a general donations page.

The `[donation_button]` shortcode will add a button using the current page title as the `giving_to` parameter for Tithe.ly. To use for a special project, add a `giving_to` parameter to the shortcode (e.g., `[donation_button giving_to="Special Bible Project"]`).

Each missionary will have the equivalent of a `[donation_button]` added at the bottom of their page.

# Changelog

## 1.0.2
- Update give button wording

## 1.0.1
- Fix giveUrl variable
- Use old-style <input type="submit" /> instead of HTML5 button
- Add plugin version constant

## 1.0.0
- Initial plugin
