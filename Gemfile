# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"
group :jekyll_plugins do
  gem "jekyll"
  gem 'jekyll-admin'
  gem 'github-pages', group: :jekyll_plugins
  gem 'wdm', '>= 0.1.0' if Gem.win_platform?
end