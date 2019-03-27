import javafx.application.Application;
import javafx.scene.control.Alert;
import javafx.stage.Stage;
import javafx.scene.image.ImageView;
import javafx.scene.image.Image;

import java.io.File;
import java.net.InetAddress;

public class Iniciar extends Application {
    static String ip = null;
    static File peraVereira;

    @Override
    public void start(Stage primaryStage) {

        Image image = new Image(peraVereira.toURI().toString());
        ImageView imageView = new ImageView(image);
        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.setGraphic(imageView);
        alert.setTitle("Sistema Iniciado");
        if (ip.contains("127.0.0.1") || ip.contains("0.0.0.0") || ip == null) {
            alert.setHeaderText("O sistema foi iniciado mas nao foi possivel detectar o endereco IP do computador atual\nVerifique o mesmo nas configuracoes do computador e use-o para acessar as atividades");
        } else {
            alert.setHeaderText("CONECTE-SE COM: " + ip + "    ");
        }
        alert.setContentText("Sistema iniciado com sucesso! Digite o endereco acima nos navegadores onde as atividades serao aplicadas \nAVISO: NAO ABRA ESSA JANELA MULTIPLAS VEZES.\nMANTENHA ESSA JANELA ABERTA ATE O FINAL DA APLICACAO DOS JOGOS\nA TRANSMISSAO SERA PARADA AO FECHAR\nPARA TERMINAR A EXECUCAO APERTE O BOTAO OK ABAIXO");
        alert.showAndWait();


    }

    public static void main(String[] args) {
        Process process = null;
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            try {
                peraVereira = new File(System.getProperty("user.dir") + "\\DATA\\pera.png");
                InetAddress localhost = InetAddress.getLocalHost();
                ip = (localhost.getHostAddress()).trim();
                String path = System.getProperty("user.dir") + "\\DATA";
                //path = path.replace("src", "DATA");
                process = new ProcessBuilder(path + "\\WinServer.exe").start();
                launch(args);
                process.destroy();


            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            try {
                peraVereira = new File(System.getProperty("user.dir") + "/DATA/pera.png");
                InetAddress localhost = InetAddress.getLocalHost();
                ip = (localhost.getHostAddress()).trim();
                String path = System.getProperty("user.dir") + "/DATA";
                ProcessBuilder pythonHttpServer = new ProcessBuilder();
                pythonHttpServer.command("bash", "-c", "python3 -m http.server");
                launch(args);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

}