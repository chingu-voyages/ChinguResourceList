# Contributing

We welcome all contributions. These guidelines are intended to provide
Contributors with the information you'll need to add useful content to this 
repo, while maintaining consistency for the reader.

## Process

Sharing a resource is easy! 

1. Clone this repo
2. Create a feature branch following the conventions documented in [Contributing]().
3. Add your resource to the appropriate category & test it to make sure it
is consistent with how other resources are formatted.
4. Create a Pull Request (PR)

That's it! An admin with review and approve your PR. If there are any questions
about your contribution we'll ask them or request changes through the PR
process.

## Content Style

Content should be added under a list of categories and subcategories. If the
resource you are adding applies to more than one category don't duplicated it.
Simply add it to the most relevant category.

The entry you create should be follow this template:
```
- [resource-title](url): <one-sentence-description>
```
Specifying a `resource-title` and its `url` is easy since you can copy it from
the site containing the resource. 

The `<one-sentence-description>` is just that! A short description to give the
reader an idea of what information it contains and why it's useful.

## Commit Messages

Commit messages should be formatted using the following pattern:
```
<type>: <subject>

<body>

Resolves: <issue URL>
See also: <reference URLs>
```

_Type_ describes the nature of the change and should be one of the following:

- `feature`: a new feature
- `fix`: a bug fix
- `docs`: changes to documentation
- `style`: formatting, missing semi colons, etc; no code change

_Subject_ is a short imperative statement of no more than 50 characters that
describes the intent of the commit.

_Body_ provides a more detailed explanation of the context, why, and what of
the changes included in the commit. Remember that the body shouldn't describe
how the code operates. Comments within the code should describe how it
functions when and where necessary. Be sure to separate the body from other
parts of the commit message using blank lines.

_Resolves_ documents one or more issues the commit closes. These should be
specified as URL's to those issues. Specify this as 'N/a' if the commit isn't
associated with an issue.

_See also_ may be used to reference any other supporting documentation. For
example, URL's to Gist's.

### Git Branches

![Neighborhood Git Workflow](https://github.com/jdmedlock/chinguxbot/blob/development/docs/Git%20-%20Team%20Workflow.png)

- `master`: Only updated from PR's from the `development` branch for release.
This branch always reflects the current production release.
- `development`: Reflects the candidate code for the next release. Developers
work in working branches, which are then pulled into this branch. All code
pulled into this branch must be tested and undergo peer review as part of the
PR process.
- `working branches`: Are individual branches created by each developer when
they are working on changes and bug fixes. There are 4 basic types of branches:
bug, feature, refactor and style, after the type comes the name, it should
specify on top of the branch type. For example feature/course-review.

## Issues

If you find an error feel free to create a PR fixing it!

If you are unable to do that feel free to open an 
[issue](https://github.com/chingu-voyages/ChinguResourceList/issues). 

You may also open an issue if you have a question or an idea for how to make 
this repo better.
