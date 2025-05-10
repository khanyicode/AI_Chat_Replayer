// js/data.js

// Demo data for conversations
const demoConversations = [
  {
    title: "Prompt 1: Comprehensive Function Documentation",
    messages: [
      {
        role: "facilitator",
        content: "Claude, Please create comprehensive code comments for this function following [JSDoc/Python docstring/etc.] conventions:",
        type: "text",
        style: {
          color: "#1E90FF", // DodgerBlue
          fontWeight: "bold",
          label: "Facilitator"
        }
      },
      {
        role: "claude",
        content: "[language]",
        type: "text",
        style: {
          color: "#32CD32", // LimeGreen
          fontStyle: "italic",
          label: "Claude"
        }
      },
      {
        role: "facilitator",
        content: "Java",
        type: "text",
        style: {
          color: "#1E90FF",
          fontWeight: "bold",
          label: "Facilitator"
        }
      },
      {
        role: "claude",
        content: "Paste function code here",
        type: "text",
        style: {
          color: "#32CD32",
          fontStyle: "italic",
          label: "Claude"
        }
      },
      {
        role: "facilitator",
        content:
`public Calculator() {
    setTitle("Calculator");
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setSize(420, 550);
    setLayout(null);

    display = new JTextField();
    display.setBounds(50, 25, 300, 50);
    display.setFont(new Font("Arial", Font.PLAIN, 24));
    display.setEditable(false);
    add(display);

    functionButtons = new JButton[8];
    addButton = new JButton("+");
    subButton = new JButton("-");
    mulButton = new JButton("*");
    divButton = new JButton("/");
    decButton = new JButton(".");
    equButton = new JButton("=");
    delButton = new JButton("Del");
    clrButton = new JButton("C");

    functionButtons[0] = addButton;
    functionButtons[1] = subButton;
    functionButtons[2] = mulButton;
    functionButtons[3] = divButton;
    functionButtons[4] = decButton;
    functionButtons[5] = equButton;
    functionButtons[6] = delButton;
    functionButtons[7] = clrButton;

    for (int i = 0; i < 8; i++) {
        functionButtons[i].addActionListener(this);
        functionButtons[i].setFont(new Font("Arial", Font.PLAIN, 24));
        functionButtons[i].setFocusable(false);
    }

    numberButtons = new JButton[10];
    for (int i = 0; i < 10; i++) {
        numberButtons[i] = new JButton(String.valueOf(i));
        numberButtons[i].addActionListener(this);
        numberButtons[i].setFont(new Font("Arial", Font.PLAIN, 24));
        numberButtons[i].setFocusable(false);
    }

    panel = new JPanel();
    panel.setBounds(50, 100, 300, 300);
    panel.setLayout(new GridLayout(4, 4, 10, 10));

    panel.add(numberButtons[1]);
    panel.add(numberButtons[2]);
    panel.add(numberButtons[3]);
    panel.add(addButton);
    panel.add(numberButtons[4]);
    panel.add(numberButtons[5]);
    panel.add(numberButtons[6]);
    panel.add(subButton);
    panel.add(numberButtons[7]);
    panel.add(numberButtons[8]);
    panel.add(numberButtons[9]);
    panel.add(mulButton);
    panel.add(decButton);
    panel.add(numberButtons[0]);
    panel.add(equButton);
    panel.add(divButton);

    add(panel);

    delButton.setBounds(150, 430, 100, 50);
    clrButton.setBounds(250, 430, 100, 50);
    add(delButton);
    add(clrButton);

    setVisible(true);
}`,
        type: "code",
        style: {
          backgroundColor: "#f5f5f5",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          label: "Facilitator"
        }
      },
      {
        role: "facilitator",
        content: `The documentation should include:
1. A clear description of what the function does  
2. All parameters with types and descriptions  
3. Return value with type and description  
4. Any exceptions or errors that might be thrown  
5. Example usage  
6. Any important notes or edge cases developers should be aware of`,
        type: "text",
        style: {
          color: "#1E90FF",
          fontWeight: "bold",
          label: "Facilitator"
        }
      },
      {
        role: "claude",
        content: "I'll create comprehensive JSDoc-style comments for this constructor function. The code appears to be a Java constructor for a calculator application built using Swing components.",
        type: "text",
        style: {
          color: "#32CD32", // LimeGreen
          fontStyle: "italic",
          label: "Claude"
        }
      },
      {
        role: "claude",
        content:
`/**
 * Constructor for the Calculator class that initializes and configures the calculator UI.
 * This constructor sets up a basic calculator with a display field and buttons for:
 * - Numeric inputs (0-9)
 * - Basic arithmetic operations (+, -, *, /)
 * - Decimal point, equals, delete, and clear functionality
 * 
 * The calculator uses a simple grid layout for the main button panel and absolute positioning
 * for other elements. The UI is designed with a fixed size and non-resizable components.
 * 
 * Note: This constructor only initializes the UI components. The actual calculation logic
 * should be implemented in the actionPerformed method (not shown here) since this class 
 * likely implements ActionListener.
 * 
 * The calculator UI includes:
 * - A non-editable display field at the top
 * - Number buttons (0-9) arranged in a grid
 * - Operation buttons (+, -, *, /)
 * - Utility buttons (., =, Del, C)
 * 
 * @throws HeadlessException if GraphicsEnvironment.isHeadless() returns true,
 *         which is inherited from the JFrame constructor
 * 
 * @see javax.swing.JFrame
 * @see java.awt.event.ActionListener
 * 
 * @example
 * // Create a new calculator instance
 * Calculator calc = new Calculator();
 * // The calculator window will appear with all buttons and display ready for use
 */
public Calculator() {
    setTitle("Calculator");
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setSize(420, 550);
    setLayout(null);

    // Initialize and configure the calculator display
    display = new JTextField();
    display.setBounds(50, 25, 300, 50);
    display.setFont(new Font("Arial", Font.PLAIN, 24));
    display.setEditable(false);
    add(display);

    // Initialize function buttons (+, -, *, /, etc.)
    functionButtons = new JButton[8];
    addButton = new JButton("+");
    subButton = new JButton("-");
    mulButton = new JButton("*");
    divButton = new JButton("/");
    decButton = new JButton(".");
    equButton = new JButton("=");
    delButton = new JButton("Del");
    clrButton = new JButton("C");

    // Store function buttons in array for easier batch configuration
    functionButtons[0] = addButton;
    functionButtons[1] = subButton;
    functionButtons[2] = mulButton;
    functionButtons[3] = divButton;
    functionButtons[4] = decButton;
    functionButtons[5] = equButton;
    functionButtons[6] = delButton;
    functionButtons[7] = clrButton;

    // Configure all function buttons with common properties
    for (int i = 0; i < 8; i++) {
        functionButtons[i].addActionListener(this);
        functionButtons[i].setFont(new Font("Arial", Font.PLAIN, 24));
        functionButtons[i].setFocusable(false);
    }

    // Initialize and configure number buttons (0-9)
    numberButtons = new JButton[10];
    for (int i = 0; i < 10; i++) {
        numberButtons[i] = new JButton(String.valueOf(i));
        numberButtons[i].addActionListener(this);
        numberButtons[i].setFont(new Font("Arial", Font.PLAIN, 24));
        numberButtons[i].setFocusable(false);
    }

    // Create and configure the main button panel with grid layout
    panel = new JPanel();
    panel.setBounds(50, 100, 300, 300);
    panel.setLayout(new GridLayout(4, 4, 10, 10));

    // Add buttons to the panel in the desired arrangement
    panel.add(numberButtons[1]);
    panel.add(numberButtons[2]);
    panel.add(numberButtons[3]);
    panel.add(addButton);
    panel.add(numberButtons[4]);
    panel.add(numberButtons[5]);
    panel.add(numberButtons[6]);
    panel.add(subButton);
    panel.add(numberButtons[7]);
    panel.add(numberButtons[8]);
    panel.add(numberButtons[9]);
    panel.add(mulButton);
    panel.add(decButton);
    panel.add(numberButtons[0]);
    panel.add(equButton);
    panel.add(divButton);

    add(panel);

    delButton.setBounds(150, 430, 100, 50);
    clrButton.setBounds(250, 430, 100, 50);
    add(delButton);
    add(clrButton);

    setVisible(true);
}`,
        type: "code",
        style: {
          backgroundColor: "#f0fff0",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          label: "Claude"
        }
      },
      {
        role: "facilitator",
        content: `I've documented the Calculator constructor with comprehensive JSDoc comments. The documentation includes:

1. **General description** - Explains that this constructor initializes a calculator UI with display and button components
2. **Component details** - Lists all UI elements being created (display, number buttons, operation buttons, etc.)
3. **Layout information** - Notes about the positioning strategy (grid layout for most buttons, absolute positioning for others)
4. **Exception information** - Documents the HeadlessException that could be thrown (inherited from JFrame)
5. **Example usage** - Shows how to instantiate the Calculator class
6. **Related classes** - References to JFrame and ActionListener

Additionally, I've added inline comments to explain different sections of the code, making it easier to understand the purpose of each block.

- `,
        type: "text",
        style: {
          color: "#1E90FF",
          fontWeight: "bold",
          label: "Facilitator"
        }
      }
    ]
  }
];

export default demoConversations;



  
  // Export the data so it can be imported in script.js
  export { demoConversations };
