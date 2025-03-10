const code = `
using System;

class Program {
    static void Main() {
        string code = @\"const code = \\\\\\\"\" + System.IO.File.ReadAllText(\"input.txt\") + \\\\\\\"\\\\\\\\nconsole.log(code);\\\\\";
        Console.WriteLine(\"const code = @\\\"\" + code.Replace("\\", "\\\\\\\\").Replace("\"", "\\\\\\\\\"") + \"\\\";\\\\nconsole.log(code);\\\\\");
    }
}`;

console.log(`
using System;

class Program {
    static void Main() {
        string code = @\"const code = \\\\\\\"\" + System.IO.File.ReadAllText(\"input.txt\") + \\\\\\\"\\\\\\\\nconsole.log(code);\\\\\";
        Console.WriteLine(\"const code = @\\\"\" + code.Replace("\\", "\\\\\\\\").Replace("\"", "\\\\\\\\\"") + \"\\\";\\\\nconsole.log(code);\\\\\");
    }
}`.replace("System.IO.File.ReadAllText(\"input.txt\")", "`" + code.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\n/g, "\\n") + "`"));
