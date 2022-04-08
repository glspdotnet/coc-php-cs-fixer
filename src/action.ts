import { CodeAction, CodeActionContext, CodeActionProvider, Command, Range, TextDocument } from 'coc.nvim';

export class FixerCodeActionProvider implements CodeActionProvider {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async provideCodeActions(document: TextDocument, range: Range, context: CodeActionContext) {
    if (document.languageId !== 'php') return;

    const codeActions: CodeAction[] = [];

    const title = `Run: php-cs-fixer.fix`;
    const command: Command = {
      title: '',
      command: 'php-cs-fixer.fix',
    };

    const action: CodeAction = {
      title,
      command,
    };

    codeActions.push(action);

    return codeActions;
  }
}
