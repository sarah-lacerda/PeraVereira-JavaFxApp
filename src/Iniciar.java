import com.sun.deploy.util.SystemUtils;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;

import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.scene.image.ImageView;

import javafx.scene.image.Image;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.InetAddress;

public class Iniciar extends Application {
    static String ip = null;

    @Override
    public void start(Stage primaryStage) {
        /* Button btn = new Button();
        btn.setText("Say 'Hello World'");
        btn.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Hello World!");
            }
        });
         */
        File f = new File("C:\\Users\\lacep\\IdeaProjects\\Pera\\src\\rindo.png");
        Image image = new Image(f.toURI().toString());
        ImageView imageView = new ImageView(image);
        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.setGraphic(imageView);
        alert.setTitle("Sistema Iniciado");
        alert.setHeaderText("CONECTE-SE COM: " + ip + "    ");
        alert.setContentText("Sistema iniciado com sucesso! Digite o endereco acima para conectar \nAVISO: Nao abra essa janela multiplas vezes.\nMANTENHA ESSA JANELA ABERTA ATE O FINAL DA APLICACAO DOS JOGOS\nA TRANSMISSAO SERA PARADA CASO ELA VENHA SER FECHADA\nPARA TERMINAR A EXECUCAO APERTE O BOTAO OK ABAIXO");
        AnchorPane root=new AnchorPane();
        alert.showAndWait();

//        StackPane root = new StackPane();
        //root.getChildren().add(btn);


    }
    public static void main(String[] args) {
        Process process = null;
        String os = System.getProperty("os.name").toLowerCase();
        if(os.contains("win")) {
            try {
                InetAddress localhost = InetAddress.getLocalHost();
                ip = (localhost.getHostAddress()).trim();
                String path = System.getProperty("user.dir") + "\\DATA";
                //path = path.replace("src", "DATA");
                process = new ProcessBuilder(path + "\\WinServer.exe").start();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        else if(os.contains("osx")){
            try {
            InetAddress localhost = InetAddress.getLocalHost();
            ip = (localhost.getHostAddress()).trim();
            String path = System.getProperty("user.dir") + "\\DATA";
            //path = path.replace("src", "DATA");
            process = new ProcessBuilder(path + "\\OSXServer.dmg").start();
            } catch (Exception e) {
            e.printStackTrace();
        }}
        launch(args);
        process.destroy();
    }

}